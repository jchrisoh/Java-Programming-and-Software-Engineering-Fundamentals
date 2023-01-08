function printPixel(nameImage, xpos, ypos) {
    var img = new SimpleImage(nameImage);
    var pixel = img.getPixel(xpos, ypos);
    
    print("red is " + pixel.getRed());
    print("green is " + pixel.getGreen());
    print("blue is " + pixel.getBlue());
}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);
