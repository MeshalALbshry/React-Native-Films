import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import FilmDetail from './FilmDetail';

class FilmsList extends Component {
    state = { film: [] }

    componentWillMount() {
        axios.get('https://ghibliapi.herokuapp.com/films')
            .then(res => this.setState({ film: res.data }));
    }

    renderAlbum() {
        return this.state.film.map(film =>
            <FilmDetail navigation={this.props.navigation} key={film.title} film={film} />
        );
    }

    render() {
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>
        );
    }
};


export default FilmsList;