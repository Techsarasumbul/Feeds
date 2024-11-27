import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Container = styled.div`
  grid-area: main;
`;

const CommonBox = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonBox)`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  color: #958b7b;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
      }
    }
  }
`;

const PostCreationBox = styled(CommonBox)`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  color: #958b7b;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
      }
    }
  }
`;

const Article = styled(CommonBox)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: #000;
        }
        &:nth-child(n + 2) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    top: 0;
    right: 12px;
    border: none;
    outline: none;
    background: transparent;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin: 8px 16px 0;
  background-color: #f9fafb;

  img {
    width: 100%;
    height: auto%;
  }

.react-player {
    width: 100% !important; /* Ensure ReactPlayer takes full width */
    height: auto !important; /* Maintain aspect ratio */
    max-width: 100%;
  }
`;

const SocialCount = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9efdf;
  color: rgba(0, 0, 0, 0.6);
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      border: none;
      color: rgba(0, 0, 0, 0.6);
      background: transparent;
      span {
        padding-left: 5px;
      }
    }
  }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 4px 12px;
  min-height: 40px;
  padding-bottom: 5px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    border: none;
    background: transparent;
    span {
      margin-left: 4px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
    }
  }
  button.active {
    span {
      color: #0a66c2;
      font-weight: 600;
    }
    svg {
      fill: #0a66c2;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StartPostButton = styled.button`
  padding: 10px 20px;
  background-color: #0a66c2;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    background-color: #004182;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  i {
    font-size: 18px;
  }

  span {
    font-weight: 600;
  }
`;

function Main() {
  const [showModal, setShowModal] = useState("close");

  const clickHandler = (event) => {
    event.preventDefault();
    if (event.target !== event.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  // Dummy data to simulate articles (2 text posts, 4 image posts, and 1 video post)
  const articles = [
    {
      actor: {
        image: "/assets/dp2.png",
        title: "John Doe",
        description: "Software Engineer",
        date: new Date(),
      },
      description: "Exploring new trends in software development.",
      sharedImg: "/assets/feed2.jpg",
      video: null,
      likes: { count: 45, whoLiked: [] },
      comments: 10,
    },
    {
      actor: {
        image: "/assets/dp3.png",
        title: "Jane Smith",
        description: "Graphic Designer",
        date: new Date(),
      },
      description: "Creating stunning designs for the modern world.",
      sharedImg: "/assets/feed1.jpg",
      video: null,
      likes: { count: 23, whoLiked: [] },
      comments: 8,
    },
    {
      actor: {
        image: "/assets/dp4.png",
        title: "Samuel Cook",
        description: "Marketing Specialist",
        date: new Date(),
      },
      description: "Top 10 tools every marketer should know about.",
      sharedImg: "/assets/feed3.jpg",
      video: null,
      likes: { count: 18, whoLiked: [] },
      comments: 3,
    },
    {
      actor: {
        image: "/assets/dp5.png",
        title: "Linda Green",
        description: "Freelancer",
        date: new Date(),
      },
      description: "A new way to get your first freelance job online. Check out my article on the best resources.",
      sharedImg: null,
      video: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
      likes: { count: 89, whoLiked: [] },
      comments: 45,
    },
  ];

  return (
    <Container>
      {/* Top ShareBox for creating posts */}
      <PostCreationBox>
        <TopSection>
          <UserImage src="/assets/dp6.webp" alt="user" />
          <StartPostButton onClick={clickHandler}>
            Start a Post
          </StartPostButton>
        </TopSection>
        <ButtonGroup>
          <ActionButton>
            <i className="fas fa-image"></i>
            <span>Photo</span>
          </ActionButton>
          <ActionButton>
            <i className="fas fa-video"></i>
            <span>Video</span>
          </ActionButton>
          <ActionButton>
            <i className="fas fa-calendar-day"></i>
            <span>Event</span>
          </ActionButton>
          <ActionButton>
            <i className="fas fa-clipboard-list"></i>
            <span>Write Article</span>
          </ActionButton>
        </ButtonGroup>
      </PostCreationBox>

      {/* Articles and Posts */}
      {articles.map((article, index) => (
        <Article key={index}>
          <SharedActor>
            <a href="!#">
              <UserImage src={article.actor.image} alt="actor image" />
              <div>
                <span>{article.actor.title}</span>
                <span>{article.actor.description}</span>
              </div>
            </a>
          </SharedActor>
          <Description>{article.description}</Description>
          {article.sharedImg && (
            <SharedImage>
              <img src={article.sharedImg} alt="shared content" />
            </SharedImage>
          )}
          {article.video && (
            <SharedImage>
			<ReactPlayer url={article.video} className="react-player" />
		  </SharedImage>
          )}
          <SocialCount>
            <li>{article.likes.count} likes</li>
            <li>{article.comments} comments</li>
          </SocialCount>
          <SocialActions>
            <button>
              <i className="far fa-thumbs-up"></i>
              <span>Like</span>
            </button>
            <button>
              <i className="far fa-comment"></i>
              <span>Comment</span>
            </button>
            <button>
              <i className="fas fa-share"></i>
              <span>Share</span>
            </button>
          </SocialActions>
        </Article>
      ))}
    </Container>
  );
}

export default Main;
