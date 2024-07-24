import React from "react";


export default function Register(props) {
  // let btnStyle;
  // btnStyle = {
  //   backgroundColor: "green",
  //   color: "white",
  //   marginTop: "10px",
  //   marginLeft: "4px",
  // };

  let btnText, passBoxType;
  let btnClasses = ["btn", "m-1"];
  if (props.showPass === true) {
    btnText = "Hide Password";
    passBoxType = "text";
    btnClasses.push("btn-danger");
  } else {
    btnText = "Show Password";
    passBoxType = "password";
    btnClasses.push("btn-success");
  }
  // const StyledButton = Styled.button`
  //   display:block;
  //   padding:10px 5px;
  //   background-color:orange;
  //   border:none;
  //   color:white;
  //   width:100%;
  // `;

  return (
    <div className="container card p-3 mt-2 register-container">
      <h1 className="text-center">Registration Form</h1>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password : </label>
          <input
            type={passBoxType}
            name="password"
            required
            className="form-control"
          />
          <div>
            <button type="submit" className="btn btn-primary m-1 btnStylee ">
              Register
            </button>
            <button
              type="button"
              className={btnClasses.join("")}
              onClick={props.click}
            >
              {btnText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
