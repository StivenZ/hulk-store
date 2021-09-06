import React from "react";
import { useFormik } from "formik";
import { loginService } from "./../services/client";
import { useHistory } from "react-router-dom";

function LoginAdmin() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      loginService(values).then(() => history.push("/store"));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-5">
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <div className="field">
            <label className="label">username</label>
            <div className="control">
              <input
                className="input is-fullwidth"
                size="2"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="root-admin"
                name="username"
              ></input>
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                className="input is-fullwidth"
                type="password"
                placeholder="********"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              ></input>
            </div>
          </div>

          <button className="button is-primary is-fullwidth" type="submit">
            Login
          </button>
        </div>
        <div className="column"></div>
      </div>
    </form>
  );
}

export default LoginAdmin;
