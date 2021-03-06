import React from "react";
import styled from "styled-components";
import Top from "../../components/Top";
import { inject, observer } from "mobx-react";
import Here from "../../components/Here";

@inject("reviewStore", "userStore", "authStore")
@observer
class My extends React.Component {
  componentWillMount() {
    // this.props.reviewStore.get_myreview(
    //   this.props.userStore.currentUser.user_id
    // );
    //console.log(this.props.authStore.name);
  }
  render() {
    return (
      <MyLayer>
        <TopLayer>
          <Top></Top>
        </TopLayer>
        <MyFrame>
          <MyProfile>
            {/* <MyFaceName> */}
            <MyFace>
              <img src="https://seolyucode.github.io/imgs/thumb.png"></img>
            </MyFace>
            <MyName>{window.sessionStorage.getItem("name")}</MyName>
            {/* </MyFaceName> */}
            <ProfileEdit>프로필 수정</ProfileEdit>
          </MyProfile>
          <MyDetail>
            <DCategory>
              <Want>여기어때?()</Want>
            </DCategory>

            <DetailCon>
              <RHere></RHere>
            </DetailCon>
          </MyDetail>
        </MyFrame>
      </MyLayer>
    );
  }
}

const MyLayer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(9, 60px);
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas:
    "TopLayer TopLayer TopLayer"
    "MyFrame MyFrame MyFrame"
    "MyFrame MyFrame MyFrame"
    "MyFrame MyFrame MyFrame"
    "MyFrame MyFrame MyFrame"
    "MyFrame MyFrame MyFrame"
    "MyFrame MyFrame MyFrame"
    "MyFrame MyFrame MyFrame"
    "MyFrame MyFrame MyFrame";
  /* background-color: pink; */
`;

const TopLayer = styled.div`
  grid-area: TopLayer;
  background-color: hotpink;
  display: grid;
  grid-template-rows: 60px 20px;
`;

const MyFrame = styled.div`
  grid-area: MyFrame;
  display: grid;
  grid-template-rows: 1fr 2fr 5fr;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas:
    ". . ."
    ". MyProfile ."
    ". MyDetail .";
`;

const MyProfile = styled.div`
  grid-area: MyProfile;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "MyFace MyName ProfileEdit";
  padding-top: 3rem;
`;

// const MyFaceName = styled.div`
//     grid-area: MyFaceName;
//     display: grid;
//     grid-template-columns: 1fr 2fr;
//     grid-template-areas:
//         "MyFace MyName"
//         ;
// `

const MyFace = styled.div`
  grid-area: MyFace;
  display: grid;
  transform: scale(0.8);

  :hover {
    animation: psa 1s forwards;
  }

  @keyframes psa {
    0% {
      opacity: 0.8;
      transform: scale(0.75);
    }

    50% {
      opacity: 1;
      transform: scale(1);
    }

    100% {
      opacity: 1;
      transform: scale(0.82);
    }
  }
`;

const MyName = styled.div`
  grid-area: MyName;
  display: grid;
  /* margin: 0 auto; */
  width: 100px;
  line-height: 200px;
`;

const ProfileEdit = styled.div`
    margin: 0 auto;
    grid-area: ProfileEdit;
    display: grid;

    text-align: center;
    line-height: 35px;
    width: 120px;
    height: 35px;
    background-color: #fff;
    /* border: none; */
    border-radius: 45px;
    background-color: #ffde96;
    /* box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); */
    /* transition: all 0.3s ease 0s; */
    cursor: pointer;
    /* outline: none; */
    
    margin-top: 85px;

    :hover {
        animation: edit 1s forwards;
    }

    @keyframes edit {
    0% {
        opacity: 0.8;
        transform: scale(0.8);
    }

    50% {
        opacity: 1;
        transform: scale(1.1);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const MyDetail = styled.div`
  grid-area: MyDetail;
  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    "DCategory DCategory DCategory DCategory DCategory"
    "DetailCon DetailCon DetailCon DetailCon DetailCon"
    "DetailCon DetailCon DetailCon DetailCon DetailCon";
`;

const DCategory = styled.div`
  grid-area: DCategory;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas: "Here";
  border-top: 1px solid rgba(var(--b38, 219, 219, 219), 1);
  padding-top: 1rem;
`;

const Want = styled.div`
  grid-area: Want;
  display: grid;
  margin: 0 auto;
`;

const DetailCon = styled.div`
  grid-area: DetailCon;
  display: grid;

  margin-top: -4rem;
  margin-left: -8rem;
`;

export const RHere = styled(Here)`
  display: block;
`;

export default My;
