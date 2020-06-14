import React,{Component} from 'react'
import Container from 'react-bootstrap/Container';
import From from 'react-bootstrap/From';
import Button from 'react-bootstrap/Button';
Class Signup extends Component {
  state = {
    email:"",
    password:"",
    VerifyPassword:"",
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("email :", this.state.email);
    console.log("password :", this.state.password);
    console.log("verifyPassword :", this.state.verifyPassword);
  }
handleChange = (event) => {
  this.setState({email: event.target.value});
}
render() {
  return(
    <container>
    <Form onSumit={this.handleSubmit}>
     <Form.Control
       type="email"
       name="email"
       onChange={this.handleChange}
       value={this.state.email}
       placeholder="email"
       />
      <Form.Control
         type="pasword"
         name="pasword"
         onChange={this.handleChange}
         value={this.state.pasword}
         placeholder="pasword"
         />
      <Form.Control
        type="verifyPassword"
        name="verifyPassword"
        onChange={this.handleChange}
        value={this.state.verifyPassword}
        placeholder="verifyPassword"
        />
      <Button variant="primary" type="submit">Connexion</Button>
    </Form>
  </Container>
 );
}
};
export default Sign;
