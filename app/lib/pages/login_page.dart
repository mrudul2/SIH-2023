// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:app/components/loginButton.dart';
import 'package:app/components/my_textfield.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  final doctorIdController = TextEditingController();
  final passwordController = TextEditingController();
  void logInMethod() {}

  LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        child: SafeArea(
          child: Center(
            child: Column(
              children: [
                const SizedBox(height: 50),
                // Logo
                Icon(
                  Icons.medical_services,
                  size: 100,
                ),
                const SizedBox(height: 50),
                // Welcome Doctor!
                Text(
                  "Welcome Doctor!",
                  style: TextStyle(color: Colors.black, fontSize: 25),
                ),
                const SizedBox(height: 50),
                // Doctor Id
                MyTextField(
                  controller: doctorIdController,
                  hintText: "Doctor ID",
                  obscureText: false,
                ),

                const SizedBox(height: 10),
                // Password
                MyTextField(
                  controller: passwordController,
                  hintText: "Password",
                  obscureText: true,
                ),

                const SizedBox(height: 30),
                // Login In Button
                LoginButton(
                  onTap: logInMethod,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
