function sumPixel(nameOfImage, xpos, ypos) {
    var someImg = new SimpleImage(nameOfImage);
    var pixel = someImg.getPixel(xpos, ypos);
    
    return pixel.getRed() + pixel.getGreen() + pixel.getBlue();
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);
