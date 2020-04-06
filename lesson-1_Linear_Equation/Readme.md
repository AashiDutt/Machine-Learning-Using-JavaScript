# Lesson 1 Linear Equation

Given an Equation : **y = 2x - 1**

We need to create a model which takes in x and predict the value of y.

# STEP 1: Creating a Model
We define our model using **tf.sequential** which means that our model is a sequence of layers. Since, we are solving a linear equation thus we need only **1 dense layer** having a **single neuron**.

To optimize our loss we need a loss function and an optimizer. So, finally we can get the summary of the model using **summary()** function.

# STEP 2 : Input Arrays with xs and ys [Training Data]
Here, we use **tf.tensor2d** function to input a 2D array or two 1D arrays each containing values for xs and ys along with size of the matrix i.e [6,1].

# STEP 3: Training the model
To train the above model we simply use the **.fit()** function by passing in the the values of xs and ys, along with the **'meansquarederror' loss function and 'sgd' optimizer**.

# STEP 4: Getting the Results
For getting the results from the model we use the **model.predict()** and pass in any value of x about which you want the value of y.
Here, we are using x = 10. Therefore, substituting into equation we get y = 19. But in actual the result is nearly 19 i.e 18.95....
