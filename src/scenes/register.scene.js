import React, { useState, useEffect } from 'react';
import {View, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {Icon} from 'react-native-elements';
import {Text, Header, Input} from './../components/index';
import { styles as _ } from '../styles';
import moment from 'moment';
import { colors, width } from '../utils/constant';


const Register = ({...props}) => {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setzipCode] = useState('');
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

    return(
        <View style={[_.container,_.blackBg,_.relative]}>
           <Header
           backBtn={true}
           back_={true}
           sideBtn={true}
           navigation={props.navigation}
           />
           <KeyboardAvoidingView
            behavior='position' keyboardVerticalOffset={ Platform.OS === 'ios' ? 40 : -180}
           >
               <ScrollView>
                   <View style={_.blackBg}>
               <View style={[_.elements,_.alignICenter,_.flexFull,_.mt20]}>
             <Text style={[_.fs24,_.textCenter,_.textWhite,{maxWidth:width-80}]}>Congratulations! Welcome to the Provider Coaching Program.</Text>
             <Text style={[_.para,_.mt20,_._lwpara,_.fs16,_.textCenter,{maxWidth:width-60}]}>We will work very closely with your provider to help you reduce your risk for chronic illness.
                We will send you a PreventScripts Starter Kit ASAP in the mail. Please let us know your address below.</Text>
             <View style={_.mt10}>
                <Input
                    placeholder="Enter Your Street Address"
                    value={street}
                    onChangeText={street => setStreet(street)}
                    label="Street Address"
                />
                 <Input
                    placeholder="Enter Your City"
                    value={city}
                    onChangeText={city => setCity(city)}
                    label="City"
                />
               <View style={_._lreinput}>
               <Input
                    placeholder="Enter Your Zip Code"
                    value={zipCode}
                    onChangeText={zipCode => setzipCode(zipCode)}
                    label="Zip Code"
                />
                  <View style={[_._labsIcon,{top:60}]}>
                        <Icon
                            type="font-awesome"
                            color={colors[3]}
                            size={16}
                            name="calendar"
                        />
                    </View>
               </View>
             
               
              
             </View>
          
           </View>
           </View>
               </ScrollView>
           </KeyboardAvoidingView>
           {!keyboardStatus &&
             <TouchableOpacity 
             onPress={() => props.navigation.navigate('Starter')}
             style={[_._lbtn,_.mt20,_._labsBtn]}>
                    <Text style={[_.textWhite,_.textCenter,_.fs18]}>Submit</Text>
                </TouchableOpacity>
            }
        </View>       
    );
}

export default Register;