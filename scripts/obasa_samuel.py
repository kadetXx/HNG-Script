class Dog():
    def __init__(self,breed,name,spots):
        self.breed = breed
        self.name = name
        self.spots = spots
    def bark(self):
        print('woof')
g = Dog('lab','sammy','wale')
g.bark()