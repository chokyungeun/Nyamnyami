from .models import Store
from .models import User
from .models import Bhour
from .models import Menu
from .models import Review
from .models import StoreMenuReview
from rest_framework import serializers


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = [
            "store_id",
            "store_name",
            "branch",
            "area",
            "tel",
            "address",
            "latitude",
            "longitude",
            "category",
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "user_id",
            "email",
            "token",
            "name",
            "password",
            "gender",
            "age",
            "profileimg",
        ]


class BhourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bhour
        fields = [
            "store_id",
            "type",
            "week_type",
            "mon",
            "tue",
            "wed",
            "thu",
            "fri",
            "sat",
            "sun",
            "start_time",
            "end_time",
            "etc"
        ]


class MenuSerializer(serializers.ModelSerializer):
    store = StoreSerializer(read_only=True)

    class Meta:
        model = Menu
        fields = [
            "menu_id",
            "store",
            "menu",
            "price"
        ]


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [
            "review_id",
            "store_id",
            "user_id",
            "total_score",
            "content",
            "reg_time"
        ]


class StoreMenuReviewSerializer(serializers.ModelSerializer):
    storekey = StoreSerializer(read_only=True)

    class Meta:
        model = Menu  # , Review
        fields = [
            "menu_id",
            "menu",
            "price",
            "storekey"
        ]
