# https://chat.openai.com/share/d4307fac-a576-474e-bba3-43b2dae5fcdf

# Given array and k value
array = [1, 2, 3, 4, 5]
k = 2


# Function to rotate the array to the right by k elements in-place
def rotate_array(arr, k):
    n = len(arr)
    k = k % n  # In case k is larger than the array length

    # Reversing the entire array
    arr.reverse()

    # Reversing the first k elements
    arr[:k] = reversed(arr[:k])

    # Reversing the remaining elements
    arr[k:] = reversed(arr[k:])

    return arr


# Rotating the given array
rotated_array = rotate_array(array, k)
print(rotated_array)
