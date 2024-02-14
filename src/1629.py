# https://chat.openai.com/share/c1ae5595-41ba-47a6-839f-b78fe097beae


def partition_list_in_place(lst, x):
    low, mid, high = 0, 0, len(lst) - 1

    while mid <= high:
        if lst[mid] < x:
            lst[low], lst[mid] = lst[mid], lst[low]
            low += 1
            mid += 1
        elif lst[mid] > x:
            lst[mid], lst[high] = lst[high], lst[mid]
            high -= 1
        else:
            mid += 1

    return lst


# Reusing the same example with the in-place method
lst = [9, 12, 3, 5, 14, 10, 10]
x = 10
partitioned_list_in_place = partition_list_in_place(lst, x)
print(partitioned_list_in_place)
