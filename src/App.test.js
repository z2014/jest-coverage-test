import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = Enzyme.mount(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
