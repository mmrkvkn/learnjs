function isEmpty(obj) {
    $i = 0;
    for (key in obj) {
        return false;
    }
    return true;
}