from math import comb, log2


def countMaxHeaps(n):
    """
    Function to count the number of max heaps for 'n' distinct integers
    """

    def getLeftCount(n):
        """
        Function to get the count of nodes in the left subtree of a heap with 'n' nodes
        """
        if n == 1:
            return 0

        h = int(log2(n))
        num_h = 1 << h  # Max number of nodes at last level of heap
        last = n - ((1 << h) - 1)  # Number of nodes at last level in this heap
        if last >= (num_h // 2):
            return (1 << h) - 1  # left subtree is a full heap
        else:
            return (1 << h) - 1 - ((num_h // 2) - last)

    def countHeapsUtil(n, dp):
        """
        Recursive utility function to calculate the number of max heaps for 'n' nodes
        """
        if n <= 1:
            return 1

        if dp[n] != -1:
            return dp[n]

        left = getLeftCount(n)
        dp[n] = (
            comb(n - 1, left)
            * countHeapsUtil(left, dp)
            * countHeapsUtil(n - 1 - left, dp)
        )
        return dp[n]

    # Initialize a dp array to store results of sub problems
    dp = [-1] * (n + 1)

    return countHeapsUtil(n, dp)


# Test the function with N = 3
result = countMaxHeaps(3)
print(result)
