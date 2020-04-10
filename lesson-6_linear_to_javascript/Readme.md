# LESSON 6: LINEAR TO JAVASCRIPT

In this project we work from the scratch. So, we write a python code in colab, build and train the model, convert it into json and use it in javascript.

# Step 1: Model in Colab

1) Install **tensorflowjs**.

2) Import the dependencies like numpy and tensorflow.

3) Create usual model using **tf.keras.Sequential()** and compile it by passing in the optimizer and loss function.

4) finally pass in the **training data i.e xs and ys**.

5) Call **model.fit()** to train the model and pass in test value to get output.

6) To save  the model, set path to current folder and use **model.save()** to save the model to that folder.

7) Use **tensorflowjs_converter** to convert model into **model.jason** file by passing in the input and output path.

8) Now, download all the files along with json file and store it in same folder as html code.

# Step 2: HTML Code

1) include the latest **tensorflow script**.

2) Call in **Model URL where html will host the json file** we just created.

3) Now, load the model and log the **summary()** of model.

4) Pass in a **2d tensor** input to the model.

5) Call **model.predict** to get the model output and get alert on output.
