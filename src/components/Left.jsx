import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: left;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 5px;
  background-color: #fff;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  padding: 12px;
  text-align: center;
`;

const ProfileImage = styled.div`
  background-color: #0a66c2;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
  font-size: 24px;
  font-weight: bold;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const CompleteProfile = styled.a`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  color: #0a66c2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CommunitiesSection = styled.div`
  margin-top: 16px;
  padding: 12px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const CommunitiesHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const CommunityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommunityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

const CommunityImage = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

const ViewAllLink = styled.a`
  display: block;
  margin-top: 12px;
  font-size: 14px;
  color: #0a66c2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Left() {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <ProfileImage>S</ProfileImage>
          <UserName>sara sumbul</UserName>
          <CompleteProfile href="#">Complete Your Profile</CompleteProfile>
        </UserInfo>
      </ArtCard>

      <CommunitiesSection>
        <CommunitiesHeader>Discover Communities</CommunitiesHeader>
        <CommunityList>
          <CommunityItem>
            <CommunityImage style={{ backgroundImage: 'url(/assets/community1.png)' }} />
            Salary Discussions, Hike ...
          </CommunityItem>
          <CommunityItem>
            <CommunityImage style={{ backgroundImage: 'url(/assets/community2.png)' }} />
            Day to Day Office
          </CommunityItem>
          <CommunityItem>
            <CommunityImage style={{ backgroundImage: 'url(/assets/community1.png)' }} />
            Miscellaneous
          </CommunityItem>
          <CommunityItem>
            <CommunityImage style={{ backgroundImage: 'url(/assets/community1.png)' }} />
            Office Jokes
          </CommunityItem>
          <CommunityItem>
            <CommunityImage style={{ backgroundImage: 'url(/assets/community2.png)' }} />
            Career Growth
          </CommunityItem>
        </CommunityList>
        <ViewAllLink href="#">View all communities →</ViewAllLink>
      </CommunitiesSection>
    </Container>
  );
}

export default Left;
