# Lesson 5: MOBILENET FOR IMAGE CLASSIFICATION

Here, we'll be using a pre-trained mobilenet model which will help us classify various objects.
# ABOUT THE DATASET
MobileNet is a CNN architecture model for Image Classification and Mobile Vision.There are other models as well but what makes MobileNet special that it very less computation power to run or apply transfer learning to.
This makes it a perfect fit for Mobile devices,embedded systems and computers without GPU or low computational efficiency with compromising significantly with the accuracy of the results.
It is also best suited for web browsers as browsers have limitation over computation,graphic processing and storage.
It has around 1.4M images and 1000 classes of images.

Link to pre- trained model: <https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet_v1.md>

# Step 1: SOURCE FILE
The very first step is to include MobileNet script source along with tensorflow.

# Step 2: SET TAG AND DIV
Since, we want to classify our input image thus it is necessary to first upload the image and then load the model.
Here, we are useing a **Img tag to load image** and a **output div to write the prediction** of the model.

# Step 3: MODEL
Before loading the model we call in the **getElementbyId()** function and pass in the image. If the image is not loaded then it will **crash** and model will not be loaded.

1) **LOAD THE MODEL**: Here, we use **model.load()** function to load the model.

2) **CLASSIFICATION**: Next, we call the **classify()** function and pass in the input image that we want to classify.

3) **GET PREDICTIONS**: MobileNet returns **top 3 predictions with maximum probability**.

#Step 4: LOOPING
To make the output presentable we **loop through predictions** and add a **break character** and print out **prediction class** and **probability using output div**.

# OUTPUT:
Your output will look something like this:

![alt text](https://github.com/AashiDutt/Machine-Learning-Using-JavaScript/blob/master/lesson-5_mobilenet/Untitled.png)
