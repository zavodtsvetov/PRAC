import styled from "styled-components";
import { Routes, Route } from "react-router";
import { Header, Footer } from "./components";
import { Authorization } from "./Pages";
const Content = styled.div`
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
        <Content>
          <Routes>
            <Route path="/" element={<div>Главная страница</div>} />
            <Route path="/login" element={<Authorization />} />
            <Route path="/register" element={<div>Зарегистрироваться</div>} />
            <Route path="/users" element={<div>Пользователи</div>} />
            <Route path="/post/:post_id" element={<div>Статья</div>} />
            <Route path="/post" element={<div>Новая статья</div>} />
            <Route
              path="*"
              element={<div>Ошибка. Страница не существует</div>}
            />
            <Route path="*" element={<div>Нет доступа!</div>} />
          </Routes>
        </Content>
        <Footer />
      </AppColumn>
    </>
  );
}

export default Blog;
