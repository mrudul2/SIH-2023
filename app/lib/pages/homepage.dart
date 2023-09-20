import 'package:app/pages/doctor_location.dart';
import 'package:app/pages/doctor_profile.dart';
import 'package:app/pages/face_recog.dart';
import 'package:app/pages/patient_page.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selectedIndex = 0;
  void _navigateBar(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  final List<Widget> _pages = [
    PatientPage(),
    FaceRecognition(),
    MapPage(),
    DoctorProfile(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        onTap: _navigateBar,
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.list), label: "Patients"),
          BottomNavigationBarItem(
              icon: Icon(Icons.face_6_sharp), label: "Face Recognition"),
          BottomNavigationBarItem(icon: Icon(Icons.map), label: "Location"),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: "Profile"),
        ],
      ),
    );
  }
}
