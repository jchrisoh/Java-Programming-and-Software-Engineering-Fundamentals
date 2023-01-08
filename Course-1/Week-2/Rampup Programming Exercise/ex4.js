function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    
    return 2 * (height + width);
}

print(perimeter("rodger.png"));
