// ignore: file_names
// ignore_for_file: file_names, duplicate_ignore

import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

class MyAppBar extends StatelessWidget implements PreferredSizeWidget {
  final String pageName;
  const MyAppBar({super.key, required this.pageName});
  void signUserOut() {
    FirebaseAuth.instance.signOut();
  }

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: const Color(0xFF447bbe),
      title: Text(pageName),
      actions: [
        IconButton(
          onPressed: signUserOut,
          icon: const Icon(Icons.logout),
        ),
      ],
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
