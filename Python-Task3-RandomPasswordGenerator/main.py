import secrets,string
n=int(input("Password length: "))
chars=string.ascii_letters+string.digits+string.punctuation
print("Password:", ''.join(secrets.choice(chars) for _ in range(n)))