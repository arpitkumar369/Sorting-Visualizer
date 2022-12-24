#toolbar {
    width: 100 %;
    height: 100px;
    background - color: #34495e;
}

#generateArray {
    font - size: 16px;
    font - family: monospace;
    display: inline - block;
    margin - left: 25px;
    margin - right: 15px;
}

#generateArray:hover {
    color: rgb(212, 212, 212)!important;
}

#generateArrayX {
    font - size: 16px;
    font - family: monospace;
    display: inline - block;
    margin - left: 25px;
    margin - right: 15px;
}

#arraySize {
    font - size: 16px;
    font - family: monospace;
    display: inline - block;
    margin - left: 15px;
    margin - right: 15px;
}

#changeSize {
    outline: none;
    margin - right: 15px;
}

.separator {
    width: 5px;
    height: 55px;
    background - color: rgba(0, 0, 0, 0.8);
    margin - left: 15px;
    margin - right: 15px;
    display: inline - block;
}

.algorithmButton {
    color: white;
    font - size: 16px;
    font - family: monospace;
    display: inline - block;
    margin - left: 15px;
    margin - right: 15px;
    cursor: pointer;
}

.algorithmButton:hover {
    color: rgb(212, 212, 212);
}

.currentAlgorithmButton {
    color: rgb(241, 94, 255);
    font - size: 16px;
    font - family: monospace;
    display: inline - block;
    margin - left: 15px;
    margin - right: 15px;
    cursor: pointer;
}

#sort {
    font - size: 16px;
    font - family: monospace;
    display: inline - block;
    margin - left: 15px;
}

#sort:hover {
    color: rgb(212, 212, 212);
}

input[type = range] {
    -webkit - appearance: none;
    border: 1px solid white;
    width: 100px;
}

input[type = range]:: -webkit - slider - runnable - track {
    width: 100px;
    height: 5px;
    border: none;
    border - radius: 3px;
}

input[type = range]:: -webkit - slider - thumb {
    -webkit - appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border - radius: 50 %;
    background: rgb(241, 94, 255);
    margin - top: -4px;
}

input[type = range]:focus {
    outline: none;
}

input[type = range]: focus:: -webkit - slider - runnable - track {
    background: #ccc;
}

input[type = range]:: -moz - range - track {
    width: 100px;
    height: 5px;
    border: none;
    border - radius: 3px;
}

input[type = range]:: -moz - range - thumb {
    border: none;
    height: 16px;
    width: 16px;
    border - radius: 50 %;
    background: rgb(241, 94, 255);
}

input[type = range]: -moz - focusring{
    outline: 1px solid white;
    outline - offset: -1px;
}

input[type = range]:: -ms - track {
    width: 100px;
    height: 5px;
    background: transparent;
    border - color: transparent;
    border - width: 6px 0;
    color: transparent;
}

input[type = range]:: -ms - fill - lower {
    background: #777;
    border - radius: 10px;
}

input[type = range]:: -ms - fill - upper {
    border - radius: 10px;
}

input[type = range]:: -ms - thumb {
    border: none;
    height: 16px;
    width: 16px;
    border - radius: 50 %;
    background: rgb(241, 94, 255);
}

input[type = range]: focus:: -ms - fill - lower {
    background: #888;
}

input[type = range]: focus:: -ms - fill - upper {
    background: #ccc;
}