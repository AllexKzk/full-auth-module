import React = require("react");
import Input from "../../../components/input";
import Button from "../../../components/button";

export default function SignUp() {
  return(
    <>
      <Input label={'Login'} />
      <Input label={'Password'} type={'password'} />
      <Input label={'Repeat password'} type={'password'} />
      <Button label={'Submit'} />
    </>
  )
}