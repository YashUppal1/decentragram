pragma solidity ^0.5.0;

contract Decentragram {
  string public name = "Decentragram";

// Store Images
uint public imageCount = 0;
mapping(uint => Image) public images;

struct Image {
  uint id;
  string hash;
  string description;
  uint tipAmount;
  address payable author;
}

event ImageCreated(
  uint id;
  string hash;
  string description;
  uint tipAmount;
  address payable author;
);

// Create Images
function uploadImage(string memory _imgHash, string memory _description) public {
  
  // Incrementing count
  imageCount = imageCount++;

  // Adding Image to contract
  images[imageCount] = Image(imageCount, _imgHash, _description, 0, msg.sender);

  //Trigger an event
  emit ImageCreated(imageCount, _imgHash, _description, 0, msg.sender);
}

// Tip Images
}