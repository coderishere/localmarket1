import { MaterialCommunityIcons } from '@expo/vector-icons';


import { Pressable, StyleSheet } from "react-native";

function FilterIcon ({onPress}){



    return(
        <Pressable onPress={onPress}>
            <MaterialCommunityIcons name="filter-menu" size={24} color="black" />
        </Pressable>
    
    )
}

export default FilterIcon;

const styles = StyleSheet.create({

})