import styled from "styled-components";
import { ROLE } from "../../constants";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { useEffect, useState } from "react";
import { H2, Input, Button } from "../../components";
import {Navigate } from "react-router";
import { setUser } from "../../actions";
import { userRoleIdSelector } from "../../selectors";
import { useDispatch, useSelector } from "react-redux";
import { useResetForm } from "../../hooks";

const regForm = yup.object().shape({
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
  passCheck: yup
   .string()
   .required("Введите пароль повторно!")
   .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
});

const RegistrationContainer = ({ className }) => {
const [serverError, setServerError] = useState(null);
const dispatch = useDispatch()
const roleId = useSelector(userRoleIdSelector)
const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      passCheck: ''
    },
    resolver: yupResolver(regForm),
  });

useResetForm(reset)

//копируем
  const onSubmit = ({ login, password }) => {
    server.register(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
      }
        dispatch(setUser(response))

    });
  };
  //копируем
  const formError = errors?.login?.message || errors?.password?.message || errors?.passCheck?.message
  const errorMessage = formError || serverError;

 if (roleId !== ROLE.GUEST) {
  return <Navigate to='/' />
 }
  return (
    <>
      <div className={className}>
        <H2>Регистрация</H2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Логин"
            {...register("login", {
              onChange: () => setServerError(null),
            })}
          />
          <Input
            type="password"
            placeholder="Пароль"
            {...register("password", {
              onChange: () => setServerError(null),
            })}
          />{" "}
          <Input
            type="password"
            placeholder="Повторите пароль"
            {...register("passCheck", {
              onChange: () => setServerError(null),
            })}
          />
          <Button type="submit" fontSize='25px' disabled={!!formError}>
            Зарегистрироваться
          </Button>
          
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  );
};

export const Registration = styled(RegistrationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`;
