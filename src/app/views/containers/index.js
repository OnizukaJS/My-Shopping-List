import { connect } from "react-redux";
import App from "../components/App";
import { saveCart } from "../../lib/actions";

//The connect() function allows you to link a React component to the store, giving both access to the state and dispatch of actions sent to the reducer (s).
export const AppContainer = connect(
  function mapStateToProps(state) {
    //To access the state of the app. We pass items to App
    return { items: state.items };
  },
  function mapDispatchToProps(dispatch) {
    return {
      //mapDispatchToProps allows you to dispatch a new action from the store which will return a modified reducer
      saveLocalStorage: (items) => dispatch(saveCart(items)),
    };
  }
)(App);
