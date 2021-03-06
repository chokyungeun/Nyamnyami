from pathlib import Path
import pandas as pd
from django.core.management.base import BaseCommand
from backend import settings
from api import models


class Command(BaseCommand):
    help = "initialize database"
    DATA_DIR = Path(settings.BASE_DIR).parent.parent / "data"
    DATA_FILE = str(DATA_DIR / "dump.pkl")

    def _load_dataframes(self):
        try:
            data = pd.read_pickle(Command.DATA_FILE)
        except:
            print(f"[-] Reading {Command.DATA_FILE} failed")
            exit(1)
        return data

    def _initialize(self):
        """
        Sub PJT 1에서 만든 Dataframe을 이용하여 DB를 초기화합니다.
        """
        print("[*] Loading data...")
        dataframes = self._load_dataframes()

        print("[*] Initializing stores...")
        models.Store.objects.all().delete()
        # models.User.objects.all().delete()
        models.Menu.objects.all().delete()
        models.Bhour.objects.all().delete()
        models.Review.objects.all().delete()
        stores = dataframes["stores"]
        stores_bulk = [
            models.Store(
                store_id=store.id,
                store_name=store.store_name,
                branch=store.branch,
                area=store.area,
                tel=store.tel,
                address=store.address,
                latitude=store.latitude,
                longitude=store.longitude,
                category=store.category,
            )
            for store in stores.itertuples()
        ]
        models.Store.objects.bulk_create(stores_bulk)

        # users = dataframes["users"]
        # users_bulk = [
        #     models.User(
        #         user_id=user.id,
        #         gender=user.gender,
        #         age=user.age
        #     )
        #     for user in users.itertuples()
        # ]
        # models.User.objects.bulk_create(users_bulk)
        menus = dataframes["menus"]
        menus_bulk = [
            models.Menu(
                store_id=menu.store,
                menu=menu.menu_name,
                price=menu.price
            )
            for menu in menus.itertuples()
        ]
        models.Menu.objects.bulk_create(menus_bulk)
        reviews = dataframes["reviews"]
        reviews_bulk = [
            models.Review(
                review_id=review.id,
                store_id=review.store,
                # user_id=review.user,
                total_score=review.score,
                content=review.content,
                reg_time=review.reg_time
            )
            for review in reviews.itertuples()
        ]
        models.Review.objects.bulk_create(reviews_bulk)
        print("[+] Done")

    def handle(self, *args, **kwargs):
        self._initialize()
