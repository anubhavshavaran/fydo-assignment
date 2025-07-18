import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Switch,
    StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const COLORS = {
    primary: '#007AFF',
    secondary: '#4A4A4A',
    lightGray: '#F1F1F5',
    textPrimary: '#000000',
    textSecondary: '#6E6E73',
    white: '#FFFFFF',
    link: '#007AFF',
};

const LoginScreen = () => {
    // --- State Management ---
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('@/assets/images/loginLogo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.headerText}>UI Unicorn</Text>
                </View>

                <View style={styles.mainContent}>
                    <Text style={styles.title}>Nice to see you again</Text>

                    <Text style={styles.label}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email or phone number"
                        placeholderTextColor={COLORS.textSecondary}
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
                            placeholderTextColor={COLORS.textSecondary}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!isPasswordVisible}
                        />
                        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                            <Feather
                                name={isPasswordVisible ? 'eye' : 'eye-off'}
                                size={22}
                                color={COLORS.textSecondary}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.optionsContainer}>
                        <View style={styles.rememberMeContainer}>
                            <Switch
                                trackColor={{ false: '#E9E9EA', true: COLORS.primary }}
                                thumbColor={COLORS.white}
                                ios_backgroundColor="#E9E9EA"
                                onValueChange={() => setRememberMe(previousState => !previousState)}
                                value={rememberMe}
                            />
                            <Text style={styles.rememberMeText}>Remember me</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.signInButtonText}>Sign in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.googleButton}>
                        <Image
                            source={{ uri: 'https://placehold.co/20x20/ffffff/DB4437?text=G' }} // Simple G for Google
                            style={styles.googleIcon}
                        />
                        <Text style={styles.googleButtonText}>Or sign in with Google</Text>
                    </TouchableOpacity>

                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Don&#39;t have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signUpLink}> Sign up now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerLeft}>
                        <Image
                            source={{ uri: 'https://placehold.co/24x24/A9C5FF/333?text=UI' }}
                            style={styles.footerLogo}
                        />
                        <Text style={styles.footerText}>@uiunicorn</Text>
                    </View>
                    <Text style={styles.footerText}>© Perfect Login 2021</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
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
        color: COLORS.textPrimary,
    },
    mainContent: {
        flex: 1,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginBottom: 8,
    },
    input: {
        backgroundColor: COLORS.lightGray,
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
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
        color: COLORS.textSecondary,
    },
    forgotPasswordText: {
        color: COLORS.link,
        fontWeight: '600',
    },
    signInButton: {
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    signInButtonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondary,
        height: 50,
        borderRadius: 8,
        marginBottom: 40,
    },
    googleIcon: {
        width: 20,
        height: 20,
        marginRight: 12,
    },
    googleButtonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: COLORS.textSecondary,
    },
    signUpLink: {
        color: COLORS.link,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
    },
    footerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerLogo: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    footerText: {
        marginLeft: 8,
        color: COLORS.textSecondary,
        fontSize: 12,
    },
});

export default LoginScreen;
