import React from "react";
import { Link, useHistory } from "react-router-dom";

import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";

function Login() {
  const navigate = useHistory();

  const goHome = () => {
    navigate.push("/app");
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Entrar
              </h1>
              <div className="mt-4 flex flex-col">
                <span>Nome de usúario</span>
                <input
                  className="mt-1 px-3 py-2 border-2 focus:outline-none"
                  type="text"
                  placeholder="Nome de usúario"
                />
              </div>

              <div className="mt-4 flex flex-col">
                <span>Senha</span>
                <input
                  className="mt-1 px-3 py-2 border-2 focus:outline-none"
                  type="password"
                  placeholder="***************"
                />
              </div>

              <button
                onClick={goHome}
                className="mt-4 py-3 px-10 bg-blue-500 text-center text-white">
                Entrar
              </button>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-blue-500 dark:text-blue-400 hover:underline"
                  to="/forgot-password">
                  Esqueceu a senha?
                </Link>
              </p>
              {/* <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account">
                  Criar nova conta
                </Link>
              </p> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
