import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


type Props = {
    name: string;
    onRemove: () => void;
    done: number;
    onDone: (add: boolean) => void;
}

export function Task({ name, onRemove, done, onDone }: Props) {
    const [checkboxState, setCheckboxState] = useState(false);

    function checkHandle() {
        setCheckboxState(!checkboxState)
        checkboxState ? onDone(false) : onDone(true)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.checkClick}
                onPress={checkHandle}
            >

                {checkboxState ? 
                <AntDesign name="checkcircle" size={24} color="#595abd" /> : 
                <Entypo name="circle" size={24} color="#595abd" />}

                <Text style={checkboxState? styles.nameDone : styles.nameActive}>
                    {name}
                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <EvilIcons name="trash" size={24} color="#6c6c6c" />
            </TouchableOpacity>
        </View>
    )
}