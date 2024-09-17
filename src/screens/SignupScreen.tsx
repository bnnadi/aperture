import { SessionContext } from '../contexts/SessionContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../utils/types';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'


/**
 * SignupScreen
 */

// Create a type for your specific screen's navigation
type SignupScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;
export default function SignupScreen() {
    const screenHeight = Dimensions.get('window').height;
    const session = React.useContext(SessionContext);
    const navigation = useNavigation<SignupScreenNavigationProp>();
    const [data, setData] = React.useState({ email: '', password: '', repassword: '' });


    // If context is undefined, throw an error
    if (!session) {
        throw new Error('AuthContext must be used within an AuthProvider');
    }

    const handleSignup = () => {
        // Perform login logic here
        session.signup();
    };

    return (
        <View style={styles.root}>
                <Text> Signup Screen </Text>
                <View style={[styles.formContainer, {height: screenHeight - 200}]}>
                    <Text style={styles.title}>Register</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text) => setData({ ...data, email: text })}
                    value={data.email}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(text) => setData({ ...data, password: text })}
                    value={data.password}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Re-enter Password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(text) => setData({ ...data, repassword: text })}
                    value={data.repassword}
                    />
                    <Pressable onPress={handleSignup} style={styles.button}>
                        <Text>Sign Up</Text>
                    </Pressable>
                    <Pressable onPress={ () => navigation.navigate('Login')} ><Text style={styles.linkText}>Already have an account? Login</Text></Pressable>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    formContainer: {
        width: '99%',           // Responsive width
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,       // Rounded corners
        marginTop: "20%",         // 200 from the top of the screen
        elevation: 5,           // Android shadow effect
        shadowColor: '#000',    // iOS shadow effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 10,       // Rounded input fields
        backgroundColor: '#f9f9f9',
      },
      linkText: {
        marginTop: 10,
        textAlign: 'center',
        color: '#007BFF',
      },
    footer: {
        padding: 20,
    },
    alternate: {
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    }
});