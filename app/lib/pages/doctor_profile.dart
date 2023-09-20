// ignore_for_file: prefer_const_literals_to_create_immutables, prefer_const_constructors
import 'package:app/components/AppBar.dart';
import 'package:app/database_manager/database_manager.dart';
import 'package:flutter/material.dart';

class DoctorProfile extends StatefulWidget {
  const DoctorProfile({super.key});

  @override
  State<DoctorProfile> createState() => _DoctorProfileState();
}

class _DoctorProfileState extends State<DoctorProfile> {
  @override
  void initState() {
    super.initState();
    fetchData();
  }

  final double coverheight = 280;
  final double profileheight = 144;
  Map<String, dynamic> doctorData = {};

  fetchData() async {
    dynamic data = await DatabaseManager().getDoctorData();

    if (data == null) {
      print("Unable to get data");
    } else {
      if (mounted) {
        setState(() {
          doctorData = data;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MyAppBar(pageName: "My Profile"),
      body: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          buildTop(),
          buildContent(),
        ],
      ),
    );
  }

  Widget buildContent() => Container(
        padding: EdgeInsets.symmetric(horizontal: 48),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 18),
            Center(child: displayName()),
            const SizedBox(height: 48),
            Text(
              "About",
              style: TextStyle(
                fontSize: 28,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            Text(
              doctorData["about"].toString(),
              style: TextStyle(fontSize: 18, height: 1.4),
            ),
          ],
        ),
      );

  Widget buildTop() {
    final top = coverheight - profileheight / 2;
    final bottom = profileheight / 2;
    String link1 = doctorData["pic"].toString();
    return Stack(
      clipBehavior: Clip.none,
      alignment: Alignment.center,
      children: [
        Container(
          margin: EdgeInsets.only(bottom: bottom),
          child: buildCoverImage(),
        ),
        Positioned(
          top: top,
          child: buildProfileImage(link1),
        ),
      ],
    );
  }

  Widget buildCoverImage() => Container(
        color: Colors.grey,
        child: Image.network(
          'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
          width: double.infinity,
          height: 280,
          fit: BoxFit.cover,
        ),
      );

  Widget buildProfileImage(String id) => CircleAvatar(
        radius: profileheight / 2,
        backgroundColor: Colors.grey.shade800,
        backgroundImage: NetworkImage(id),
      );

  Widget displayName() => Column(
        children: [
          Text(
            doctorData["FName"].toString() +
                " " +
                doctorData["LName"].toString(),
            style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
          ),
          Text(
            doctorData["degree"].toString(),
            style: TextStyle(fontSize: 20, color: Colors.black),
          ),
        ],
      );
}
