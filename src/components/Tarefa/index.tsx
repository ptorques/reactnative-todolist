import { View, Text, TouchableOpacity} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from './style';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons'; 


type Props = {
    name: string;
    onRemove: () => void;
}

export function Task({ name, onRemove }: Props) {
    const [checkboxState, setCheckboxState] = useState(false);

    return (
        <View style={styles.container}>

            <BouncyCheckbox
                style={{ marginLeft: 16}}
                fillColor='#595abd'
                isChecked={checkboxState}
                text={name}
                textStyle={styles.name}
                disableBuiltInState
                onPress={() => setCheckboxState(!checkboxState)}
            />

            <TouchableOpacity style={styles.button} onPress={onRemove}>
              <EvilIcons name="trash" size={24} color="#6c6c6c" />
            </TouchableOpacity>
        </View>
    )
}