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
    const PatientPage(),
    const FaceRecognition(),
    const MapPage(),
    const DoctorProfile(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        fixedColor: const Color(0xFF447bbe),
        currentIndex: _selectedIndex,
        onTap: _navigateBar,
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(
              icon: Icon(Icons.list_alt), label: "Patients"),
          BottomNavigationBarItem(
              icon: Icon(Icons.face), label: "Face Recognition"),
          BottomNavigationBarItem(
              icon: Icon(Icons.location_on), label: "Location"),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: "Profile"),
        ],
      ),
    );
  }
}
