import React, { useState } from "react";
import { View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView} from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import { basic, form, colors } from "../constants/style";

function SignupScreen({navigation}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = password => {
    let re = /[0-9]+/;
    return re.test(password);
  };

  const validatePhone = phone => {
    let re = /^(233|0)[\d]{9}$/;
    return re.test(phone);
  };

  const handleSubmit = () => {
    if (
      email === "" ||
      phone === "" ||
      name === "" ||
      adress === "" ||
      password === ""
    ) {
      setMessage("Fill in all fields");
    } else if (!validateEmail(email)) {
      setMessage("Only valid email addresses are accepted");
    } else if (!validatePhone(phone)) {
      setMessage("Invalid phone number");
    } else if (password.length <= 10) {
      setMessage("Password should have more than 10 characters");
    } else if (!validatePassword(password)) {
      setMessage("Password should include numbers");
    } else if (password !== adress) {
      setMessage("Passwords donot match!");
    } else {
      setMessage("");
      setPassword("");
      setPhone("");
      setName("");
      setEmail("");
      setAdress("");
      navigation.navigate("Home");
    }
  };

  return (
    <>

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={[basic.container]}
        behavior="padding"
        enabled
      >
        <ScrollView>
          <Text style={[form.heading, form.field]}>Sign Up</Text>
          <Text style={form.message}>{message}</Text>

          <View style={form.field}>
            <Text style={form.label}>Name</Text>
            <TextInput
              onChangeText={value => setName(value)}
              name="name"
              style={form.input}
              value={name}
              autoCapitalize="none"
            />
          </View>

          <View style={form.field}>
            <Text style={form.label}>Email</Text>
            <TextInput
              onChangeText={value => setEmail(value)}
              name="email"
              style={form.input}
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={form.field}>
            <Text style={form.label}>Phone Number</Text>
            <TextInput
              onChangeText={value => setPhone(value)}
              name="phone"
              style={form.input}
              value={phone}
              autoCapitalize="none"
              maxLength={12}
              keyboardType="number-pad"
            />
          </View>

          <View style={form.field}>
            <Text style={form.label}>Password</Text>
            <TextInput
              onChangeText={value => setPassword(value)}
              name="password"
              style={form.input}
              secureTextEntry={!showPassword}
              value={password}
              autoCapitalize="none"
            />
            <Ionicons
              onPress={() => setShowPassword(!showPassword)}
              style={form.eye}
              name={showPassword ? "md-eye-off" : "md-eye"}
            />
          </View>

          <View style={form.field}>
            <Text style={form.label}>Adress</Text>
            <TextInput
              onChangeText={value => setAdress(value)}
              name="adress"
              style={form.input}
              secureTextEntry={!showPassword}
              value={adress}
              autoCapitalize="none"
            />
          </View>

          <View style={form.field}>
            <TouchableOpacity onPress={handleSubmit} style={form.button}>
              <Text style={form.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </>
  );
}

export default SignupScreen;

