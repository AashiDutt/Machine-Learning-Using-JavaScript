let video;
let label = "waiting...";
let confidence = 0.0;
let classifier;

function setup() {
  createCanvas(640, 540);
  // Create a video element
  video = createCapture(VIDEO);
  video.hide();

  // STEP 1: Load the model
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
  background(0);
  image(video, 0, 0);

  // STEP 4: Show current label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label + " " + confidence, width / 2, height - 16);
}

function modelReady() {
  console.log('Model Ready');
  classifyVideo();
}

// STEP 2: Do the classifying
function classifyVideo() {
  classifier.classify(gotResult);
}

// STEP 3: Get the classification
function gotResult(err, results) {
  // The results are in an array ordered by confidence.
  label = results[0].label;
  confidence = nf(results[0].confidence, 0, 2);
  classifyVideo();
}
