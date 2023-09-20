import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

class DatabaseManager {
  final CollectionReference collectionReference =
      FirebaseFirestore.instance.collection("Doctors");
  Future getDoctorData() async {
    String userEmail =
        FirebaseAuth.instance.currentUser?.email?.toString() ?? '';
    try {
      QuerySnapshot querySnapshot =
          await collectionReference.where("Email", isEqualTo: userEmail).get();
      if (querySnapshot.docs.isNotEmpty) {
        QueryDocumentSnapshot documentSnapshot = querySnapshot.docs[0];
        Map<String, dynamic> data =
            documentSnapshot.data() as Map<String, dynamic>;
        return data;
      }
    } catch (e) {
      print(e);
    }
  }
}
