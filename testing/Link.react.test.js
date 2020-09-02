import React from 'react';
import Link from './Link.react';
import renderer from 'react-test-renderer';

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
