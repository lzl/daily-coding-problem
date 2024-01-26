# https://chat.openai.com/share/64903395-d3a1-46c0-984b-42feb18d48e2


def push_dominoes(dominoes):
    n = len(dominoes)
    forces = [0] * n  # To store the net force on each domino

    # Calculate the force exerted by right pushes
    force = 0
    for i in range(n):
        if dominoes[i] == "R":
            force = n  # Set force to a large number
        elif dominoes[i] == "L":
            force = 0  # Reset force if a left domino is encountered
        else:
            force = max(force - 1, 0)  # Decrease force as we move right
        forces[i] += force

    # Calculate the force exerted by left pushes
    force = 0
    for i in range(n - 1, -1, -1):
        if dominoes[i] == "L":
            force = n  # Set force to a large number
        elif dominoes[i] == "R":
            force = 0  # Reset force if a right domino is encountered
        else:
            force = max(force - 1, 0)  # Decrease force as we move left
        forces[i] -= force

    # Determine the final state of each domino
    result = ""
    for f in forces:
        if f > 0:
            result += "R"
        elif f < 0:
            result += "L"
        else:
            result += "."

    return result


# Test the function with the provided examples
example1 = ".L.R....L"
example2 = "..R...L.L"

print(push_dominoes(example1), push_dominoes(example2))
