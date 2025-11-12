import styled from "styled-components";
import { ROLE } from "../../constants";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { useEffect, useState } from "react";
import { H2, Input, Button } from "../../components";
import { Link, Navigate } from "react-router";
import { setUser } from "../../actions";
import { userRoleIdSelector } from "../../selectors";
import { useDispatch, useStore, useSelector } from "react-redux";
const authForm = yup.object().shape({
  login: yup
    .string()
    .required("Введите логин!")
    .matches(/^\w+$/, "Неверный логин! Только буквы.")
    .min(3, "Логин не менее трёх символов!")
    .max(10, "Логин не более 10 символов!"),
  password: yup
    .string()
    .required("Введите пароль!")
    .matches(
      /^[\w]+$/,
      "Недопустимый символ в пароле! Только буквы, цифры и # %"
    )
    .min(3, "Пароль не менее трёх символов!")
    .max(10, "Пароль не более 10 символов!"),
});
const RegisterLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  margin: 5px 0;
  font-size: 13px;
`;

const AuthorizationContainer = ({ className }) => {
  const [serverError, setServerError] = useState(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authForm),
  });
const dispatch = useDispatch()
const store = useStore()
 const roleId = useSelector(userRoleIdSelector)
useEffect(()=> {
  let currentWasLogout = store.getState().app.wasLogout
   return store.subscribe(()=> {
let prevWasLogogut = currentWasLogout
currentWasLogout = store.getState().app.wasLogout
if(currentWasLogout !==prevWasLogogut){
  reset()
}
  }, [reset, store])
  
}, 

)
//кнопка авторизоваться
  const onSubmit = ({ login, password }) => {

    server.authorize(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
      }
        dispatch(setUser(response))

    });
  };
  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

 if (roleId !== ROLE.GUEST) {
  return <Navigate to='/' />
 }
  return (
    <>
      <div className={className}>
        <H2>Авторизация</H2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Логин"
            {...register("login", {
              onChange: () => setServerError(null),
            })}
          />
          <Input
            name="authPassword"
            type="password"
            placeholder="Пароль"
            {...register("password", {
              onChange: () => setServerError(null),
            })}
          />{" "}
          <Button type="submit" disabled={!!formError}>
            Авторизоваться
          </Button>
          <RegisterLink to="/register">Регистрация</RegisterLink>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  );
};

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`;
