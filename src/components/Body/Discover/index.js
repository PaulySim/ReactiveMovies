import { connect } from "react-redux";
import discover from "../../../actions/discover";
import Discover from "./Discover";

const mapDispatchToProps = dispatch => ({
  discoverFetch: value => dispatch(discover(value))
});
const mapStateToProps = state => ({
  discover: state.discover
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
