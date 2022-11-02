import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>공통메뉴</div>
            {children}
        </div>
    )

};

AppLayout.propTypes = {
    // node.js가 아니라 react의 node임
    children: PropTypes.node.isRequired,
};

export default AppLayout;