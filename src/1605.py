# https://chat.openai.com/share/334c53ee-83ef-4d2d-9471-5448eeda39e9

def count_ways(N):
    if N == 0:
        return 0
    if N == 1:
        return 1

    # Initialize an array to store the number of ways for each board size
    ways = [0] * (N + 1)
    ways[0] = 0  # Base case for N = 0
    ways[1] = 1  # Base case for N = 1

    for i in range(2, N + 1):
        # Add ways to fill the board by placing a vertical domino
        ways[i] += ways[i - 1]

        # Add ways to fill the board by placing trominoes
        ways[i] += ways[i - 2] * 2  # Two possible orientations of trominoes

    return ways[N]


# Example usage
N = 4
result = count_ways(N)  # Number of ways to fill a 2 x 4 board
print(result)
