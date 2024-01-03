import React = require("react");
import './index.css';
import Input from "../../components/input";
import Button from "../../components/button";

export default function Auth() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <span>
          Simple Auth Page
        </span>
        <div className="content">
          <Input label={'Login'} />
          <Input label={'Password'} type={'password'} />
          <Button label={'Submit'} />
        </div>
      </div>
    </div>
  );
}