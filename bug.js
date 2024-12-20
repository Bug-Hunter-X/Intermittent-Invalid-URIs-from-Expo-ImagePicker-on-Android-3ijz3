This bug occurs when using the Expo ImagePicker library on Android devices.  After selecting an image from the device's gallery, the image URI returned by ImagePicker is sometimes invalid, leading to errors when attempting to display or upload the image.  The URI may be missing, incorrect, or point to a non-existent file. This appears to be intermittent and not reliably reproducible.