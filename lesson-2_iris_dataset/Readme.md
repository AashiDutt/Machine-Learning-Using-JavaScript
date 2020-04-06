# LESSON 2 : IRIS DATASET

# ABOUT DATASET
Iris dataset is a collection of 3 classes of flower species namely **Setosa, Versicolour & Virginica**. It has 150 values corresponding to 4 feaatures of these classes.

**The features are :**
1. sepal length in cm
2. sepal width in cm
3. petal length in cm
4. petal width in cm

Link to download dataset: <http://archive.ics.uci.edu/ml/datasets/iris>


# Step 1: Loading Dataset via http protocol
To use the dataset it is required to keep the csv file in the same folder as html file. 
In order to upload the dataset we need URL and pass it to **tf.data.csv()** function and name it as **TrainingData**. Also, from the dataset description we know that **species** is the required label  i.e 5th column of the .
Thus, we flag it as labels in trainingData.

# Step 2: Converting data from dictionary to array

The data available to us is in form of a dictionary so, we convert the data into array where xs represents features and ys represent labels in batch size of 10.
Also an array of labels is set to corresponding 0 or 1 value for each class of flower i.e if our output matches with setosa then output will be [1, 0, 0].

# Step 3: MODEL
We create model using **tf.sequential** for model to be like a layered structure. Then we add a **hidden layer with 5 neurons** activated by **Sigmoid function**.
Finally the **output layer having 3 neurons**(as we have 3 labels) activated by **Softmax** function.

![alt text](https://github.com/AashiDutt/Machine-Learning-Using-JavaScript/blob/master/lesson-2_iris_dataset/Untitled.jpg)

# Step 4: Compiling Model
In order to compile the model, we use **model.compile()** function and pass loss function : **categoricalcrossentropy** and optimizer: **tf.train.adam(0.06)**.

# Step 5: Training
In this step we pass the no. of **epochs** along with loss function and optimizer. 
Here we use **await** so that next line of code do not execute before model end up training.

#Step 6: Prediction
Finally we pass in the data we want to test and call **model.predict()** and call **run()**.

On runninng the code in the browser for **[4.4, 2.9, 1.4, 0.2]** features of **setosa** we get output as **[0.9942396, 0.0001128, 0.0056478]** means approximately equal to **[1, 0, 0]**. Thus we can say that probability of data being from **class Setosa** is maximum.

