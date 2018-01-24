import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button';

const FilmDetail = ({ film, navigation }) => {
    //attr
    const {
        title,
        description,
        url,
        director,
        producer,
        release_date,
        rt_score
        } = film;
    //style    
    const {
        headerContentStyle,
        thumbnailStyle,
        thumbnailContianerStyle,
        headerTextStyle,
        imageStyle
        } = styles;

    return (
        <Card>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Text>{description}</Text>
            </CardSection>
            <CardSection>
                <Button onPress={() => navigation.navigate('Details',
                    {
                        title: title,
                        description: description,
                        director: director,
                        producer: producer,
                        release_date: release_date,
                        rt_score:rt_score
                    })}>
                    {title}
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContianerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}


export default FilmDetail;