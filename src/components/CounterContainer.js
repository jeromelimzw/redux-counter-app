import { connect } from "react-redux";

import { increment, decrement } from "../redux/actions";

import Counter from "./Counter";

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: options => {
      dispatch(increment(options));
    },
    decrement: options => {
      dispatch(decrement(options));
    }
  };
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default NavBarContainer;
