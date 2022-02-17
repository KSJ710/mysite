import React from 'react';
import { withRouter, NextRouter } from 'next/router';

interface WithRouterProps {
  router: NextRouter;
}

type State = {
  name: string;
  email: string;
  password: string;
};

class New extends React.Component<WithRouterProps> {
  state: State;

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }
  changeEmail(e) {
    this.setState({ email: e.target.value });
  }
  changePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <>
        <form action="/api/member/create" method="post">
          <label htmlFor="name">
            Name:
            <input type="text" value={this.state.name} name="name" className="border-2" onChange={this.changeName} />
          </label>
          <label htmlFor="email">
            email:
            <input type="text" value={this.state.email} className="border-2" onChange={this.changeEmail} />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              value={this.state.password}
              name="password"
              className="border-2"
              onChange={this.changePassword}
            />
          </label>
          <input type="submit" value="Submit" className="px-4 mt-2 bg-cyan-300 rounded-full " />
        </form>
        {this.props.router.query.result === 'error' ? <div>エラーです。</div> : null}
      </>
    );
  }
}

export default withRouter(New);
