import React = require("react");
import Input from "../../../components/input";
import Button from "../../../components/button";

export default function SignIn() {
  return(
    <>
      <Input label={'Login'} />
      <Input label={'Password'} type={'password'} />
      <Button label={'Submit'} />
    </>
  )
}