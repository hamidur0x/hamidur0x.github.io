import tkinter
import math
def click(val):
    e=entry.get()
    ans=" "
    try:
        if val=="C":
            e=e[:-1]
            entry.delete(0,"end")
            entry.insert(0,e)
            return
        elif val=="AC":
            entry.delete(0,"end")
        elif val=="x\u00B2":
            ans=eval(e)**2
        elif val=="x\u00B3":
            ans=eval(e)**3

        elif val=="Root":
            ans=math.sqrt(eval(e))
        elif val== "Pi":
            ans=math.pi

        elif val=="=":
            ans=eval(e)

        else:
            entry.insert("end",val)
            return
        entry.delete(0,"end")
        entry.insert(0,ans)

    except(ZeroDivisionError,ValueError,SyntaxError):
        entry.delete(0,"end")
        entry.insert(0,"Error"
                       "")






root=tkinter.Tk()
root.title("Calculator")
root.config(bg="gray7")
root.geometry("400x500+600+100")
entry=tkinter.Entry(root,font=("arial",25,"bold"),bg="white",fg="black",width=20,bd=10)
entry.grid(column=0,row=0,columnspan=8)
button_list=["AC","C","x\u00B2","x\u00B3",
"1","2","3","+",
"4","5","6","-",
"7","8","9","*",
".","0","%","/"
            ,"Root","Pi" ,"="]

c=0
r=1
for i in button_list:
    if i in ["+","-","*","/"]:
        back="blue"
    elif i in ["AC","C"]:
        back="red"

    elif i in [".","%"]:
        back="gray"

    elif i in ["="]:
        back="green"
    else:
        back="pink"

    button=tkinter.Button(root,bg=back,fg="black",text=i,command=lambda button=i:click(button),bd=10,width=4,height=1,font=("arial",15,"bold"))
    button.grid(column=c,row=r,padx=5,pady=5)
    c+=1
    if c>3:
        r+=1
        c=0
root.mainloop()


