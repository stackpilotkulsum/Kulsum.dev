const fs = require('fs');
let css = fs.readFileSync('index.html', 'utf8');

const headRepl = .character-head {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 65px;
  height: 65px;
  background: linear-gradient(135deg, #FFE4C4, #F5E6C8);
  border-radius: 50%;
  border: 3px solid #0c0c0c;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.character-head::before {
  content: '';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 16px;
  background: #7aa87d;
  border-radius: 10px;
  border: 2px solid #0c0c0c;
  z-index: -1;
}
.character-head::after {
  content: '';
  position: absolute;
  top: -16px;
  left: 52%;
  width: 16px;
  height: 10px;
  background: #98c49a;
  border-radius: 0 15px 0 15px;
  border: 2px solid #0c0c0c;
  z-index: -1;
  transform: rotate(20deg);
}
.character-face::before {
  content: '';
  position: absolute;
  top: 55%;
  left: 10px;
  width: 12px;
  height: 6px;
  background: rgba(255, 105, 180, 0.45);
  border-radius: 50%;
  box-shadow: 33px 0 rgba(255, 105, 180, 0.45);
};

css = css.replace(
  /\.character-head \{[\s\S]*?box-shadow: 0 2px 8px rgba\(0,0,0,0\.2\);\s*\}/, 
  headRepl
);

const eyeRepl = .character-eye {
  width: 16px;
  height: 20px;
  background: #0c0c0c;
  border-radius: 50%;
  animation: blink 4s infinite;
  position: relative;
}
.character-eye::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 5px;
  width: 6px;
  height: 8px;
  background: white;
  border-radius: 50%;
}
.character-eye::before {
  content: '';
  position: absolute;
  bottom: 4px;
  right: 3px;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
};

css = css.replace(
  /\.character-eye \{[\s\S]*?\.character-eye::after \{[\s\S]*?border-radius: 50%;\s*\}/,
  eyeRepl
);

const smileRepl = .character-smile {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 5px;
  border: 2px solid #0c0c0c;
  border-top: none;
  border-radius: 0 0 10px 10px;
};

css = css.replace(
  /\.character-smile \{[\s\S]*?border-radius: 0 0 28px 28px;\s*\}/,
  smileRepl
);

const torsoRepl = .character-torso {
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 40px;
  background: linear-gradient(135deg, #98c49a, #7aa87d);
  border-radius: 20px 20px 15px 15px;
  border: 2px solid #0c0c0c;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
};

css = css.replace(
  /\.character-torso \{[\s\S]*?box-shadow: 0 2px 6px rgba\(0,0,0,0\.2\);\s*\}/,
  torsoRepl
);

fs.writeFileSync('index.html', css, 'utf8');
console.log('Update complete!');
