import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import appFirebase from "../config_firebase";

const auth = getAuth(appFirebase);

export default function ScreenLogin() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Bienvenido!", "Inicio de sesión exitoso");

            // Redirigir y limpiar historial de navegación
            navigation.reset({
                index: 0,
                routes: [{ name: "TabsNavigator" }],
            });
        } catch (error) {
            console.error(error);
            Alert.alert("Error al iniciar sesión", "Usuario o contraseña incorrectos. Inténtalo de nuevo");
        }
    };

    const registrar = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert("Crear cuenta", "Cuenta creada correctamente. Inicia sesión");
            navigation.navigate("ScreenLogin");
        } catch (error) {
            console.error("Error al crear cuenta:", error);
            Alert.alert("Error", "No se pudo crear la cuenta. Inténtalo de nuevo.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.imagen} source={require("../assets/login3.jpg")} />
                <Text style={styles.title}>Login</Text>

                <View style={styles.card}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Correo electrónico"
                            placeholderTextColor="#8B8B8B"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            placeholderTextColor="#8B8B8B"
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={login}>
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonText} onPress={registrar}>
                    <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF5F8",
    },
    innerContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    imagen: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#D63384",
        marginBottom: 20,
        fontFamily: "serif",
    },
    card: {
        width: "85%",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    inputContainer: {
        width: "100%",
    },
    input: {
        width: "100%",
        height: 45,
        borderBottomWidth: 2,
        borderBottomColor: "#D63384",
        marginBottom: 20,
        fontSize: 16,
        color: "#333",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#D63384",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    registerText: {
        marginTop: 15,
        fontSize: 16,
        color: "#D63384",
        textDecorationLine: "underline",
    },
});

