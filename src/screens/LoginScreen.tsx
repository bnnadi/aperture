import { SessionContext } from '../contexts/SessionContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../utils/types';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

/**
 * LoginScreen
 */

// Create a type for your specific screen's navigation
type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;
export default function LoginScreen() {
    const screenHeight = Dimensions.get('window').height;
    const session = React.useContext(SessionContext);
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [data, setData] = React.useState({ email: '', password: '' });


    // If context is undefined, throw an error
    if (!session) {
        throw new Error('AuthContext must be used within an AuthProvider');
    }

    const handleLogin = () => {
        // Perform login logic here
        session.login();
    };

    return (
        <View style={styles.root}>
                <Text> Login Screen </Text>
                <View style={[styles.formContainer,{height: screenHeight - 200}]}>
                    <Text style={styles.title}>Login</Text>
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
                    <Pressable onPress={handleLogin} style={styles.button}>
                        <Text>Login</Text>
                    </Pressable>
                    <Pressable onPress={ () => navigation.navigate('ForgotPassword')} ><Text style={styles.linkText}>Forgot Password?</Text></Pressable>
                    <Pressable onPress={ () => navigation.navigate('SignUp')} ><Text style={styles.linkText}>Don't have an account? Sign Up</Text></Pressable>
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