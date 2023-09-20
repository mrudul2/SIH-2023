import 'dart:io';

import 'package:app/components/AppBar.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class FaceRecognition extends StatefulWidget {
  const FaceRecognition({super.key});

  @override
  State<FaceRecognition> createState() => _FaceRecognitionState();
}

class _FaceRecognitionState extends State<FaceRecognition> {
  File? capturedImage;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const MyAppBar(pageName: "Face Recognition"),
      body: Center(
        child: Column(
          children: [
            const SizedBox(height: 8),
            Container(
              alignment: Alignment.topCenter,
              child: capturedImage != null
                  ? Image.file(capturedImage!)
                  : const Text(
                      "Please Capture Your Image",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
            ),
            const SizedBox(height: 8),
            Container(
              alignment: Alignment.bottomCenter,
              child: MaterialButton(
                onPressed: () {
                  _captureImage();
                },
                color: const Color(0xFF447bbe),
                child: const Text(
                  "Open Camera",
                  style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 16),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future _captureImage() async {
    final image = await ImagePicker().pickImage(
      source: ImageSource.camera,
      preferredCameraDevice: CameraDevice.front,
    );

    if (image == null) return;
    setState(() {
      capturedImage = File(image.path);
    });
  }
}
