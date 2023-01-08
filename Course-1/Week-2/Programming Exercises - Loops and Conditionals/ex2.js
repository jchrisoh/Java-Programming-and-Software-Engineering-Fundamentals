var image = new SimpleImage("chapel.png");

for (var pixel of image.values()) {
    pixel.setRed(0);
}

print(image);
