def myfunction(**kwargs):
    for key , value in kwargs.items():
        print("%s== %s"%(key,value))
myfunction(first="Geeks",middle="for",last="Geeks")
