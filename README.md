# Task-3 - Tiles and Waves!

## Description
* This website reads the number of boxes required by the user to create a N x N Matrix layout.
* Then the user can hover over the created boxes/tiles and it will play a random tune from the basic music waves _do re mi fa so la ti do_.
* The speciality of this website is the fact that the waves will be played in a systematic order as follows:
  * For a wave played, the next wave will be from the list of waves which have not been played and is after the played one. E.g. if _fa_ is played then the next will be from _so la ti do_ and so on.
  * Once the iteration has been exhausted, we start from the beginning and continue to do so in this fashion
* The user can see the hovered tiles as they will be highlighted separately. There will also be a refresh button in case the user needs to start over from the given matrix.

## Contributions:
* This website has been developed by Sriram Ramakrishnan and Shantanu Khosla.
* These are the various parts of the code we needed to successfully launch the webpage:
  * Creating a N x N matrix by receiving input from the user.
  * Developing the randomized tuning algorithm
  * Making the highlighting features and playing the music when hovered
  * Implementing the refresh button
