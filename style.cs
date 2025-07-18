:root {

  --bg: #ffffff;

  --text: #111111;

  --card: #f9f9f9;

  --font: 'Helvetica Neue', sans-serif;

}



body.dark {

  --bg: #1a1a1a;

  --text: #ffffff;

  --card: #2a2a2a;

}



body {

  margin: 0;

  padding: 0;

  font-family: var(--font);

  background-color: var(--bg);

  color: var(--text);

  transition: background 0.3s ease, color 0.3s ease;

}



header {

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 1rem 2rem;

  font-size: 1.5rem;

  background: var(--bg);

}



#upload {

  text-align: center;

  padding: 1rem;

}



#canvas {

  max-width: 100%;

  border-radius: 12px;

  margin-top: 1rem;

  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

}



#pickedColor {

  text-align: center;

  margin: 1rem;

}



#colorPreview {

  width: 50px;

  height: 50px;

  border-radius: 50%;

  margin: 0 auto;

  border: 1px solid #ccc;

}



#products, #wishlist {

  padding: 1rem 2rem;

}



.product-card {

  background: var(--card);

  border-radius: 10px;

  padding: 1rem;

  margin: 1rem 0;

  display: flex;

  align-items: center;

  justify-content: space-between;

  box-shadow: 0 2px 6px rgba(0,0,0,0.05);

  transition: transform 0.2s;

}



.product-card:hover {

  transform: scale(1.01);

}



.product-info {

  flex: 1;

}



.buy-btn, .wishlist-btn {

  background: #eee;

  padding: 0.5rem 1rem;

  border: none;

  border-radius: 8px;

  margin-left: 0.5rem;

  cursor: pointer;

}



#darkToggle {

  background: none;

  border: none;

  font-size: 1.2rem;

  cursor: pointer;


}



