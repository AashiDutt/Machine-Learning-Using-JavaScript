# Lesson 3: MNIST CLASSIFIER

In this project we have built a **MNIST Classifier using Convolutional Neural Network(CNN)** which is trained in browser with the popular **MNIST Image dataset for handwritten digit classification**.

**Your Output will look something like this:**

![alt text](https://github.com/AashiDutt/Machine-Learning-Using-JavaScript/blob/master/lesson-3_MNIST/Untitled.jpg)

# About MNIST Dataset

The MNIST database of handwritten digits, available from this page, has a **training set of 60,000 examples, and a test set of 10,000 examples**.
There are **10 classes of digits from 0 to 9**. You can have a look at the dataset here: <http://yann.lecun.com/exdb/mnist/>

Before getting strted with creating a CNN model we must know that we need to access a large dataset  of around 55,000 images via http protocol which is high load.
Thus we **download a single image containing number of images and slice it up into array to form 1000's of images**.

Another thing about this dataset is that while using images we need to reshape image from **(784 x 1) pixels to (28 x 28) pixels** to be taken as input for CNN.

# Step 1: Creating Model

We begin by **tf.sequential()** which depicts that model will be a layered structure in script.js.

**FIRST LAYER :**

  Then we define a **2D Convolutional layer** having input shape[28, 28, 1], a **kernel size** which is the **filter size**, activated by **Relu function** which **filter out values less than 0**.

**SECOND LAYER:**

  This is a **maxPooling layer** with pool size of [2, 2].

**THIRD LAYER** and **FOURTH LAYER:**

  This layer ìs again a **2d convolutional layer** followed by another **maxPool layer**.

  Then we use **tf.layers.flattern** is used to change the shape of data by converting input data into array of [28, 28] pixel each needed for training and then flatten them out.

**FIFTH LAYER:**

  It is a dense layer with **128 neurons activated by relu function.**

**SIXTH LAYER:**

  It is the output layer which has **10 neurons for 10 classes**.

# Step 2: Compile Model
To compile the above model we call **model.compile()** and define the **optimizer**, **loss function** along with the **metrics** we want to capture.

# Step 3: Model Training
In order to train model on training data we need to call **model.fit()** function and pass in the **batch size**(since we have a very large dataset, we break it down into batches), **validation data (to validate and report back accuracy), no. of epochs, shuffle and callbacks.**

# Step 4: Visualizing Training
For visualizing purpose we have a visual library called  using **tf.vis.lib**. It has a function **tfvis.show.callbacks()** which intakes a **container which renders feedback and metrics which we need to monitor**.

# CANVAS AND INFERENCE
Apart from the model we need a canvas for input data on which we want the model to make a prediction. Thus, following functions are main components of this inference:

1) **train()**
    It contains data to be passed to the model i.e metrics, container, batch size, train data size, test data size, no. of epochs etc along with a function which helps to select the nest batch of both train and test data.
  
2) **setPosition()**
    It helps to set the position of x and y while drawing on the canvas.
    
3) **draw()**
    It helps to draw canvas greater than size of the image.
    
4) **erase()**
    It allows one to erase the canvas for new input.
    
5) **save**
    This function is of really good use as it does not allow unneccessary data saving on your device. It is also used to call **model.predict()**.
    
6) **init()**
    This function helps us to draw on the canvas with mouse.
 
7) **run()**
    It is basically used to call all functions to run the model and await until model is trained.It is called as soon as the document is loaded(last line of code in script.js).
    
**Note- Data.js is a part of tensorflow.js samples.**

Finally **mnist.html** clubs together all the files to be executed as one.













