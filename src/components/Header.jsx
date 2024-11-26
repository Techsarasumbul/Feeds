import React from "react";
import styled from "styled-components";

const Container = styled.div`
	background-color: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	padding: 0 24px;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 10;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	height: 100%;
	max-width: 1128px;
`;

const Logo = styled.span`
	margin-right: 8px;
	font-size: 0;
`;

const Search = styled.div`
	opacity: 1;
	flex-grow: 1;
	position: relative;
	@media (max-width: 768px) {
		flex-grow: unset;
	}
	& > div {
		max-width: 280px;
		input {
			border: none;
			box-shadow: none;
			background-color: #eef3f8;
			border-radius: 2px;
			color: rgba(0, 0, 0, 0.9);
			width: 218px;
			padding: 0 8px 0 40px;
			line-height: 1.75;
			font-weight: 400;
			font-size: 14px;
			height: 34px;
			vertical-align: text-top;
			border-color: #dce6f1;
			@media (max-width: 768px) {
				width: 140px;
			}
		}
	}
`;

const SearchIcon = styled.div`
	width: 40px;
	z-index: 1;
	position: absolute;
	top: 10px;
	left: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Nav = styled.nav`
	margin-left: auto;
	display: block;
	@media (max-width: 768px) {
		position: fixed;
		left: 0;
		bottom: 0;
		background: white;
		width: 100%;
	}
`;

const NavListWrap = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	list-style-type: none;
	justify-content: space-between;
`;

const NavList = styled.li`
	display: flex;
	align-items: center;
	a {
		align-items: center;
		background: transparent;
		display: flex;
		flex-direction: column;
		font-size: 12px;
		font-weight: 400;
		justify-content: center;
		line-height: 1.5;
		min-height: 52px;
		min-width: 80px;
		text-decoration: none;
		span {
			color: rgba(0, 0, 0, 0.6);
			display: flex;
			align-items: center;
			text-align: center;
		}
		@media (max-width: 768px) {
			min-width: 50px;
			font-size: 9px;
			span > img {
				width: 40%;
			}
		}
	}
	&:hover,
	&:active {
		a {
			span {
				color: rgba(0, 0, 0, 0.9);
			}
		}
	}
`;

const User = styled(NavList)`
	a > img {
		border-radius: 50%;
		width: 25px;
		height: 25px;
	}
	span {
		display: flex;
		align-items: center;
	}
`;



const Work = styled(User)`
	border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

function Header() {
	return (
		<Container>
			<Content>
				<Logo>
					<a href="/feed">
						<img src="/images/home-logo.svg" alt="Home Logo" />
					</a>
				</Logo>
				<Search>
					<div>
						<input type="text" placeholder="Search" />
					</div>
					<SearchIcon>
						<img src="/images/search-icon.svg" alt="Search Icon" />
					</SearchIcon>
				</Search>
				<Nav>
					<NavListWrap>
						<NavList>
							<a href="/feed">
								<img src="/images/nav-home.svg" alt="Home" />
								<span>Home</span>
							</a>
						</NavList>
						<NavList>
							<a href="/feed">
								<img src="/images/nav-network.svg" alt="My Network" />
								<span>My Network</span>
							</a>
						</NavList>
						<NavList>
							<a href="/feed">
								<img src="/images/nav-jobs.svg" alt="Jobs" />
								<span>Jobs</span>
							</a>
						</NavList>
						<NavList>
							<a href="/feed">
								<img src="/images/nav-messaging.svg" alt="Messaging" />
								<span>Messaging</span>
							</a>
						</NavList>
						<NavList>
							<a href="/feed">
								<img src="/images/nav-notifications.svg" alt="Notifications" />
								<span>Notifications</span>
							</a>
						</NavList>
						<User>
							<a>
								<img src="/images/user.svg" alt="User" />
								<span>Me</span>
							</a>
						</User>
						<Work>
							<a>
								<img src="/images/nav-work.svg" alt="Work" />
								<span>Work</span>
							</a>
						</Work>
					</NavListWrap>
				</Nav>
			</Content>
		</Container>
	);
}

export default Header;
