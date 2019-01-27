import React from 'react'
import { shallow } from "enzyme";
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList';

// Test that the CommentBox component exist in App
it('shows a comment box', () => {
    const wrapped = shallow(<App />)
    expect(wrapped.find(CommentBox).length).toEqual(1)
});

// Test that the CommentList component exist in App
it('show a comment list', () => {
    const wrapped = shallow(<App />)
    expect(wrapped.find(CommentList).length).toEqual(1)
})