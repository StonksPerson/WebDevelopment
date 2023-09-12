import random
MaxHealth = 10
MoneyMuliplier = 1
MoneyPrice = 1
HealthPrice = 1
inShop = True
o = 1
money = 0
while 1 == 1:
    health = MaxHealth
    print('Press ENTER to walk')
    while health > 0 :
        if (health > 0):
            o = o + 1
        inp = input()
    
        if (inp == '') : rand = random.randint(0,1)
        else : rand = 0


        if (rand == 1): health =  health - 1

        if (health == 0):
            print('your dead')
            o = o - 1
            string = 'you survived {} steps'.format(o)
            print(string)
        else:
            string = 'you survived with {} health'.format(health)
            print(string)
    money = money + (o * MoneyMuliplier)
    money = int(money)
    o = 0
    while inShop == True:
        string = 'you have {} dollars'.format(money)
        print(string)
        MoneyP = 10 * MoneyPrice
        HealthP = 10 * HealthPrice
        MoneyP = int(MoneyP)
        HealthP = int(HealthP)
        string = 'what would you like to but? H = More health ({}$)  M = +100.0% money ({}$)  L = Leave shop'.format(HealthP,  MoneyP)
        print(string)
        inp = input()
        if inp == 'h' or inp == 'H':
            print("how many?")
            amount = input()
            if amount.isnumeric() == True:
                amount = int(amount)
                if (money - HealthP * amount) >= 0:
                    MaxHealth = MaxHealth + 1 * amount
                    money = money - HealthP * amount
                    HealthPrice = HealthPrice + (HealthPrice * 1.1) * amount
                else: print("Too Poor")

        if inp == 'm' or inp == 'M':
            print("how many?")
            amount = input()
            if (amount.isnumeric() == True):
                amount = int(amount)
                if (money - MoneyP * amount) >= 0:
                    MoneyMuliplier = MoneyMuliplier * 2 * amount
                    money = money - MoneyP * amount
                    MoneyPrice = MoneyPrice * 1.5 * amount
                else: print("Too Poor")


        
        if inp == 'l' or inp == 'L' : inShop = False
        money.__round__
    inShop = True