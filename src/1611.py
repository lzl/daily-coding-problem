# https://chat.openai.com/share/a8550947-5930-4500-bc18-441b2a41cd72


def lexicographically_smallest_string(s, k):
    # If k is greater than 1, we can always create the smallest string by sorting
    if k > 1:
        return "".join(sorted(s))
    else:
        # For k = 1, we find the smallest character in the string and its index
        min_char = min(s)
        index = s.index(min_char)

        # If the smallest character is at the beginning, the string is already the smallest
        if index == 0:
            return s
        else:
            # Move the part of the string before the smallest character to the end
            return s[index:] + s[:index]


# Example usage
string = "daily"
k = 1
print(lexicographically_smallest_string(string, k))
