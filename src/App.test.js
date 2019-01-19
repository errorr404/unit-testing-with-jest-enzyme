import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const component = shallow(<App debug />);
  expect(component).toMatchSnapshot();
});
