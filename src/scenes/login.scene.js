import React, { useState, useEffect } from 'react';
import {View, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {Icon} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Text, Header, Input} from './../components/index';
import { styles as _ } from '../styles';
import moment from 'moment';
import { colors } from '../utils/constant';

const dobInitial = {
    state:false,
    value: new Date(),
    visible:false
}

const Login = ({...props}) => {
    const [name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState(dobInitial);
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    console.disableYellowBox = true;

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        // cleanup function
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
      }, []);
    
      const _keyboardDidShow = () => setKeyboardStatus(true);
      const _keyboardDidHide = () => setKeyboardStatus(false);

    const onChangeDob = (value) => {
        let dob_ = {
            state:true,
            value:value,
            visible:false
        }

        setDob(dob_);
    }
    return(
        <View style={[_.container,_.blackBg,_.relative]}>
           <Header/>
           <KeyboardAvoidingView
            behavior='position' keyboardVerticalOffset={ Platform.OS === 'ios' ? 40 : -150}
           >
               <ScrollView>
                   <View style={_.blackBg}>
           <View style={[_.elements,_.alignICenter,_.flexFull,_.mt40]}>
             <Text style={[_.fs30,_.textCenter,_.textWhite]}>Log In</Text>
             <View style={_.mt20}>
                <Input
                    placeholder="Enter Your Name"
                    value={name}
                    onChangeText={name => setName(name)}
                    label="Name"
                />
                 <Input
                    placeholder="Enter Your Last Name"
                    value={lastName}
                    onChangeText={lastName => setName(lastName)}
                    label="Last Name"
                />
                 <Input
                    placeholder="Enter Your Email"
                    value={email}
                    onChangeText={email => setName(email)}
                    label="Email"
                    keyboardType={'email-address'}
                />
                <Text style={[_.para,_.mt20]}>Date of Birth</Text>
                <TouchableOpacity 
                onPress={() => setDob({...dob,visible:true})}
                style={[_.mt5,_._linput,_.justifyCenter,_.relative]}>
                    <Text style={_.para}>{!dob.state ? 'Choose the Date' : moment(dob.value).format('DD-MMM-YYYY')}</Text>
                    <View style={_._labsIcon}>
                        <Icon
                            type="font-awesome"
                            color={colors[3]}
                            size={16}
                            name="calendar"
                        />
                    </View>
                </TouchableOpacity>
              
             </View>
           
           </View>
           </View>
               </ScrollView>
           </KeyboardAvoidingView>
           {!keyboardStatus &&
             <TouchableOpacity 
             onPress={() => props.navigation.navigate('Register')}
             style={[_._lbtn,_.mt20,_._labsBtn]}>
                    <Text style={[_.textWhite,_.textCenter,_.fs18]}>Starter Kit</Text>
                </TouchableOpacity>
                }
           <DateTimePickerModal
                isVisible={dob.visible}
                mode={'date'}
                onConfirm={value => onChangeDob(value)}
                onCancel={() => setDob({...dob,visible:false})}
                />
        </View>       
    );
}

export default Login;