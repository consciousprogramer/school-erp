import React from 'react';
// import PropTypes from 'prop-types';

function NavLink(props) {
    console.log('Rendering:[Navlinks]');

    return (
        <li className="flex-grow-0 capitalize px-3 py-4 hover:text-green-300 border-solid border-b-2 border-my-dark-blue hover:border-green-400">
            <a href="http://x.com">
                {props.Text}
            </a>
        </li>
    )
}
// NavLink.PropTypes = {
//     Text:PropTypes.string
// }
export default React.memo(NavLink)
