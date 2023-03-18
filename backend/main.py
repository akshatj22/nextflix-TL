import pickle
import sys,json
sim = pickle.load(open("finally.pkl",'rb'))
def recommend(id):
    mvl = sim[id]
    cnt=0;
    mydict={}
    for i in mvl:
        mydict[str(cnt)]=i
        cnt+=1
    return mydict
print(recommend(sys.argv[1]))

