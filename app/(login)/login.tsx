import React, {useState} from 'react';
import {
    Alert,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useRouter} from "expo-router";
import {Colors} from "@/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "@/components/ui/Loader";

function LoginScreen() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    async function login() {
        try {
            setIsLoading(true);

            if (email === '' || password === '') {
                Alert.alert('Unable to Login!', 'Please enter your credentials!');
            }

            if (email === 'admin' && password === 'root') {
                if (rememberMe) {
                    await AsyncStorage.setItem('user', email);
                }
                router.replace("/(main)/")
            } else {
                Alert.alert('Unable to Login!', 'Please enter correct credentials!');
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <Loader/>
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.light.white}/>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('@/assets/images/loginLogo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.headerText}>Fydo</Text>
                </View>

                <View style={styles.mainContent}>
                    <Text style={styles.title}>Nice to see you again</Text>

                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Admin"
                        placeholderTextColor={Colors.light.textSecondary}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Enter password"
                            placeholderTextColor={Colors.light.textSecondary}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!isPasswordVisible}
                        />
                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                            <Feather
                                name={isPasswordVisible ? 'eye' : 'eye-off'}
                                size={22}
                                color={Colors.light.textSecondary}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.optionsContainer}>
                        <View style={styles.rememberMeContainer}>
                            <Switch
                                trackColor={{false: '#E9E9EA', true: Colors.light.tabIconSelected}}
                                thumbColor={Colors.light.white}
                                ios_backgroundColor={Colors.light.tabIconSelected}
                                onValueChange={() => setRememberMe(previousState => !previousState)}
                                value={rememberMe}
                            />
                            <Text style={styles.rememberMeText}>Remember me</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.signInButton} onPress={login}>
                        <Text style={styles.signInButtonText}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 12,
        color: Colors.light.textPrimary,
    },
    mainContent: {
        flex: 1,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.light.textPrimary,
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        color: Colors.light.textSecondary,
        marginBottom: 8,
    },
    input: {
        backgroundColor: Colors.light.lightGray,
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.light.lightGray,
        borderRadius: 8,
        height: 50,
        paddingHorizontal: 16,
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 25,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberMeText: {
        marginLeft: 8,
        color: Colors.light.textSecondary,
    },
    signInButton: {
        backgroundColor: Colors.light.tabIconSelected,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    signInButtonText: {
        color: Colors.light.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
