import React from "react";
import { View, Text, Image, TouchableWithoutFeedback} from "react-native";
import { User} from "../../types";
import styles from "./style";
import {useNavigation} from '@react-navigation/native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export type ContactListItemProps = {
    user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
    const {user} = props;

    const navigation = useNavigation();

    const onClick = () => {
           //navigate to chat room with this user
        }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri: user.imageUri}} style={styles.avatar}/>

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text style={styles.age}> {user.age}</Text>
                    </View>
                </View>
                <View>
                    <MaterialCommunityIcons name="map-marker-distance" style={styles.distanceIcon} />
                    <Text style={styles.distance}> {user.distance}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItem;
