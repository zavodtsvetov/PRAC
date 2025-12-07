import styled from "styled-components";
import { Routes, Route } from "react-router";
import { Header, Footer } from "./components";
import { Authorization, Registration, Users } from "./Pages";
const Page = styled.div`
	padding: 120px 0;
	height: 600px;
`;
const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: white;
	margin: 0 auto;
`;
function Blog() {
	return (
		<>
			<AppColumn>
				<Header />
				<Page>
					<Routes>
						<Route path="/" element={<div>Главная страница</div>} />
						<Route path="/login" element={<Authorization />} />
						<Route path="/register" element={<Registration />} />
						<Route path="/users" element={<Users />} />

						<Route path="/post" element={<div>Новая статья</div>} />
						<Route
							path="/post/:postId"
							element={<div>Статья</div>}
						/>
						<Route
							path="*"
							element={<div>Ошибка. Страница не существует</div>}
						/>
						<Route path="*" element={<div>Нет доступа!</div>} />
					</Routes>
				</Page>
				<Footer />
			</AppColumn>
		</>
	);
}

export default Blog;
