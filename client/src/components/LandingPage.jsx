import { Component } from "react";
import { connect } from "react-redux";
import { getAllGenres } from "../redux/actions";
import { Link } from "react-router-dom";
import '../css/landingPage.css'

export class LandingPage extends Component {
    

    componentWillUnmount() {
        this.props.getAllGenres()
    }

    render() {
        return <div className="landingContainer">
            <div className="modalContainer">
            <Link to={"/videogames"}>
            ingresar</Link>
                </div>
                </div>
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