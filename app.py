from flask import Flask, render_template , request , jsonify
app = Flask(__name__, static_url_path = "", static_folder = "players")


direc = 1 	
stick_dirB = 1
stick_dirR = 4
position_x = 0
red_score=0
blue_score=0
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/starting', methods=['GET','POST'])
def starting():
    if request.method == 'POST':
        global red_score
        global blue_score
        red_score="0"
        blue_score="1"
        return render_template('Foosball.html',red_score=red_score,blue_score=blue_score)
   
@app.route('/process',methods=['POST'])
def process():
    global direc
    global position_x
    if direc >=1 :
        direc = direc +1 
        position_x = request.form['position_x']
        position_y = request.form['position_y']
        return jsonify({'x' : position_x , 'y' : position_y , 'angle': 30 , 'direction':direc})

@app.route('/stick',methods=['POST'])
def stick():
    global stick_dirB
    global stick_dirR
    if position_x >= 0:
        blue_stick = request.form['blue_stick']
        red_stick = request.form['red_stick']
        return jsonify({'posB' : blue_stick , 'posR' :red_stick , 'stick_dirB' : stick_dirB , 'stick_dirR' : stick_dirR })

@app.route('/show_result', methods=['GET','POST'])
def show_result():
    if request.method == 'POST' :
        if red_score > blue_score :
            return render_template('win.html',red_score=red_score,blue_score=blue_score)
        elif blue_score > red_score :
            return render_template('lose.html',red_score=red_score,blue_score=blue_score)
        else:
            return render_template('NoWinner.html',red_score=red_score,blue_score=blue_score)



if __name__ == "__main__": 
    app.run()