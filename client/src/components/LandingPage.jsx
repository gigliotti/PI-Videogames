import { Component } from "react";
import { connect } from "react-redux";
import { getAllGenres } from "../redux/actions";
import { Link } from "react-router-dom";

export class LandingPage extends Component {
    

    componentWillUnmount() {
        this.props.getAllGenres()
    }

    render() {
        return <div><Link to={"/videogames"}>
            Ingresat</Link></div>
    }
}

export const mapStateToProps = (state) => {
    return {
        genres: state.genres
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getAllGenres: () => dispatch(getAllGenres())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);