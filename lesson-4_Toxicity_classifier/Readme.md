# LESSON 4: TEXT TOXICITY CLASSIFIER

In this project we'll look into Text toxicity classifier where we use a **pre-trained model** and the only thing we have to do is to set a threshold and pass text whose toxicity needs to be found.

Link to pre-trained models : https://github.com/tensorflow/tfjs-models

# Step 1: SRC FILE
The first step is to include a **src file** for toxicity model along with tensorflow.

# Step 2: SET THRESHOLD
The next step is to set a threshold, in this case we set it to **0.9**.

# Step 3: LOADING THRESHOLD 
In this step we load the threshold value in the model and then pass in any sentence whose toxicity needs to be predicted.

# Step 4: CLASSIFICATION
Now, use **model.classify()** function and pass in text and log the result which can be viewed in console.

# Step 5: PREDICTIONS
The predictions which are greater than equal to the threshold have high probability of being toxic. Probabilities are dipicted as **[not insulting, insulting]**.

# OUTPUT
**Your output will look something like this:**

![alt text](https://github.com/AashiDutt/Machine-Learning-Using-JavaScript/blob/master/lesson-4_Toxicity_classifier/Untitled.png)
