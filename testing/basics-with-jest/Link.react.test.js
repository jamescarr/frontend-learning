import React from 'react';
import Link from './Link.react';
import renderer from 'react-test-renderer';


// This test generates a snapshot in __snapshots__/Link.react.test.js.snap
// that contains the output from the first test run, then compares it 
// next time the test is ran. If the output changes, the test will fail.
// Made it fail by changing mouseLeave to set the state to HOVERED.
test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://zapier.com">Zapier Makes You Happier</Link>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // trigger the callback
    tree.props.onMouseEnter();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the leave
    tree.props.onMouseLeave();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
