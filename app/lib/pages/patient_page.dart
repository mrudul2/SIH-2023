import 'package:app/components/AppBar.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class PatientPage extends StatefulWidget {
  const PatientPage({Key? key}) : super(key: key);

  @override
  State<PatientPage> createState() => _PatientPageState();
}

class _PatientPageState extends State<PatientPage> {
  final patientData =
      FirebaseFirestore.instance.collection('Patients').snapshots();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const MyAppBar(pageName: "Patient Data"),
      body: StreamBuilder(
        stream: patientData,
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return const Text("Connection Error");
          }
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const CircularProgressIndicator();
          }
          var doc = snapshot.data!.docs;
          return ListView.builder(
            itemCount: doc.length,
            itemBuilder: (context, index) {
              return ListTile(
                leading: const Icon(Icons.medical_services),
                title: Text('${doc[index]['AppType']}'),
                subtitle: Text('${doc[index]['Timeslot']}'),
              );
            },
          );
        },
      ),
    );
  }
}
