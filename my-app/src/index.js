import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Input, Button, Checkbox, Image } from 'semantic-ui-react';

class TopMenu extends React.Component {

  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Icon name="facebook messenger" size="huge"/></Menu.Item>
            <Menu.Item position="right">Features</Menu.Item>
            <Menu.Item>Privacy & Safety</Menu.Item>
            <Menu.Item>For Developers</Menu.Item>
          </Container>
        </Menu>
  );
  }
}

class Middlepic extends React.Component {

  render() {
    return (
        <div className='middlepic'>
        <Image src="https://scontent-lax3-1.xx.fbcdn.net/v/t39.8562-6/83730369_619533318801248_4677291368995880960_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_oc=AQk_2Cx58YohYQDJhPecZaNw6Hr5rnW3Zdkux6sTXe8oyTWaBdbpyYBVBuXVvrk0y-E&_nc_ht=scontent-lax3-1.xx&oh=751c158d417229b9de48f3bdd8807844&oe=5E95DFEA" size='big' floated='right'/>
        </div>
    );
  }
}


class Middle extends React.Component {

  render() {
    return (
        <div className='middlemenu'>
          <Container>
            <h1>Be together,
              <p>whenever.</p>
            </h1>
            <h4>
              A simple way to text, video chat and
              <p>plan things all in one place.</p>
            </h4>

            <h3>
              <Input placeholder="Email or phone number" size="small"/>
            </h3>
            <h3>
              <Input placeholder="Password" size="small"/>
            </h3>
            <div className="primary blue button">
            <Button primary>Sign In</Button>
            </div>
            <br/>
            <Checkbox label='Keep me signed in' />
            <h5>
            Forgot your password?
            </h5>
            <Button color='black' icon labelPosition='left'>
              <Icon name='apple'/>Download on the App Store</Button>
            <br/>
            <Button color='black' icon labelPosition='left'>
            <Icon name='google play'/>GET IT ON Google Play</Button>
          </Container>
        </div>
    );
  }
}

class Footer extends React.Component {

  render() {
    return (
        <Menu borderless className="footer" fluid>
          <Container>
            <Menu.Item><Icon name="copyright outline"/>Facebook 2020. The Apple and Google Play logos are trademarks of their respective owners.</Menu.Item>
            <Menu.Item position="right">Data Policy</Menu.Item>
            <Menu.Item>Terms</Menu.Item>
            <Dropdown item text="English (US)" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>English (US)</Dropdown.Item>
                <Dropdown.Item>Español</Dropdown.Item>
                <Dropdown.Item>Français</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    );
  }
}

class Messenger extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middlepic/>
          <Middle/>
          <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<Messenger/>, document.getElementById('root'));