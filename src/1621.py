import heapq


def find_regular_numbers(n):
    # Base case: if n is 0, return an empty list
    if n == 0:
        return []

    # Initialize the min-heap with the first regular number
    regular_numbers = [1]
    heap = [1]

    # Set to keep track of numbers already seen
    seen = set()
    seen.add(1)

    # Generate regular numbers until we reach n
    while len(regular_numbers) < n:
        # Get the smallest number from the heap
        smallest = heapq.heappop(heap)

        # Generate new numbers by multiplying with 2, 3, and 5
        for i in [2, 3, 5]:
            new_num = i * smallest
            if new_num not in seen:
                heapq.heappush(heap, new_num)
                seen.add(new_num)

        # Append the smallest number to the result
        regular_numbers.append(heap[0])

    return regular_numbers


# Example usage
result = find_regular_numbers(10)  # Finding the first 10 regular numbers
print(result)
