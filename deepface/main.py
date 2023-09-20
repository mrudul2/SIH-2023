from deepface.basemodels.VGGFace import loadModel
from flask import Flask, request, jsonify

app = Flask(__name__)


# Load the VGGFace model
def load_model():
    global vgg_face_descriptor
    if vgg_face_descriptor is None:
        vgg_face_descriptor = loadModel()


vgg_face_descriptor = loadModel()


@app.route('/verify', methods=['POST'])
def verify():
    try:
        load_model()
        # Assuming you receive two images in the request
        image1 = request.files['image1']
        image2 = request.files['image2']

        # Preprocess the images as needed (e.g., resize, normalize)
        # Extract embeddings using the loaded model
        embedding1 = vgg_face_descriptor.predict(preprocess_image(image1))
        embedding2 = vgg_face_descriptor.predict(preprocess_image(image2))

        # Calculate the similarity score (e.g., cosine similarity)
        similarity_score = calculate_similarity(embedding1, embedding2)

        # Define a threshold for verification (you can adjust this)
        threshold = 0.5

        # Perform verification
        is_verified = similarity_score > threshold

        # Return the verification result as JSON
        return jsonify({'verified': is_verified, 'similarity_score': similarity_score})
    except Exception as e:
        return jsonify({'error': str(e)})


def preprocess_image(image):
    # Preprocess the image (e.g., resize, normalize)
    # Replace this with your image preprocessing code
    return image


def calculate_similarity(embedding1, embedding2):
    # Calculate similarity score (e.g., cosine similarity)
    # Replace this with your similarity calculation code
    return 0.7


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
