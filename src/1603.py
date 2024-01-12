# https://chat.openai.com/share/bb7941aa-92fd-4a76-a0c3-b7c86332da14

N = 5


def count_set_bits(N):
    total_set_bits = 0

    for i in range(1, N + 1):
        total_set_bits += bin(i).count("1")

    return total_set_bits


print(f"1: {count_set_bits(N)}")


def count_set_bits_2(N):
    def count_bits_in_number(num):
        count = 0
        while num:
            count += num & 1  # Add 1 if the least significant bit is 1
            num >>= 1  # Right shift to check the next bit
        return count

    total_set_bits = 0
    for i in range(1, N + 1):
        total_set_bits += count_bits_in_number(i)

    return total_set_bits


print(f"2: {count_set_bits_2(N)}")


def count_set_bits_3(N):
    count = 0
    i = 0

    while (1 << i) <= N:
        # Divide the range 0...N into blocks of size 2^(i+1)
        block_size = 1 << (i + 1)
        # Count how many full blocks are there
        full_blocks = N // block_size
        # Count the number of set bits in the full blocks
        count += full_blocks * (block_size // 2)

        # Count the number of set bits in the partial block
        # which is the remainder of the division
        partial_block = N % block_size
        count += max(0, partial_block - (block_size // 2) + 1)

        i += 1

    return count


print(f"3: {count_set_bits_3(N)}")
