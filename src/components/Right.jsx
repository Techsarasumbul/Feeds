import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: right;
  @media (max-width: 768px) {
    margin-bottom: 35px;
  }
`;

// Follow Card Styles
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      border: none;
    }
  }
`;

const Avatar = styled.div`
  background: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #0a66c2;
  img {
    margin-left: 5px;
  }
`;

// Message Section Styles
const MessageSection = styled.div`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-top: 16px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    h2 {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }

    .tabs {
      display: flex;
      gap: 8px;

      button {
        background: transparent;
        border: none;
        padding: 8px 12px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #666;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: #e9e9e9;
        }

        &.active {
          background: #0073b1;
          color: #ffffff;
        }
      }
    }
  }

  .message-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .message {
      display: flex;
      align-items: center;
      background: #f9f9f9;
      padding: 10px;
      border-radius: 8px;
      transition: background 0.3s ease;
      cursor: pointer;

      &:hover {
        background: #f1f1f1;
      }

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 12px;
      }

      .content {
        flex: 1;

        .name {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .preview {
          font-size: 14px;
          color: #666;
          margin-top: 4px;
        }
      }

      .timestamp {
        font-size: 12px;
        color: #999;
        margin-left: 8px;
      }

      .badge {
        background: #0073b1;
        color: #ffffff;
        font-size: 12px;
        font-weight: 600;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 12px;
      }
    }
  }
`;

const messages = [
  {
    id: 1,
    avatar: "https://via.placeholder.com/48",
    name: "Crio.Do",
    preview: "Land your dream role in Full-stack...",
    timestamp: "Nov 25",
    unread: true,
  },
  {
    id: 2,
    avatar: "https://via.placeholder.com/48",
    name: "Sara",
    preview: "We’d like to invite you...",
    timestamp: "Nov 15",
    unread: true,
  },
  {
    id: 3,
    avatar: "https://via.placeholder.com/48",
    name: "Muhammad Ramzan",
    preview: "Thank you for your application...",
    timestamp: "Mar 11",
    unread: false,
  },
  {
    id: 4,
    avatar: "https://via.placeholder.com/48",
    name: "Biju Sharman",
    preview: "https://youtube.com/shorts...",
    timestamp: "Jan 28",
    unread: false,
  },
];

function Right() {
  return (
    <Container>
      {/* Follow Card */}
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Jobless</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>

      {/* Message Section */}
      <MessageSection>
        <div className="header">
          <h2>Messaging</h2>
          <div className="tabs">
            <button className="active">Focused</button>
            <button>Other</button>
          </div>
        </div>
        <div className="message-list">
          {messages.map((msg) => (
            <div className="message" key={msg.id}>
              <img src={msg.avatar} alt={msg.name} />
              <div className="content">
                <span className="name">{msg.name}</span>
                <span className="preview">{msg.preview}</span>
              </div>
              <span className="timestamp">{msg.timestamp}</span>
              {msg.unread && <div className="badge">1</div>}
            </div>
          ))}
        </div>
      </MessageSection>
    </Container>
  );
}

export default Right;