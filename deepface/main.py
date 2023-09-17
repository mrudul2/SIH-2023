from deepface import DeepFace
result1 = DeepFace.verify(img1_path="images/imag1.png", img2_path="images/imag2.png")
result2 = DeepFace.verify(img1_path="images/imag1.png", img2_path="images/imag3.png")
print(result1)
print(result2)
