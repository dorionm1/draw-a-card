import DrawCardBtn from "./components/DrawButton";
import ReshuffleButton from "./components/ReshuffleButton";
import Card from "./components/Card";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


const shuffleCards = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
export const allGoneImg = 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092018/untitled-1_46.png?6SWwrdv.8N76RHQOFWzz.LtbtdlqSICp&itok=Odfi4UXR'

const App = () => {
  const [deck, setDeck] = useState(null);
  const [card, setCard] = useState(null);

      useEffect(() => {
          const fetchDeckData = async () => {
              const newDeck = await axios(shuffleCards)

              setDeck(newDeck.data.deck_id)
          }

          fetchDeckData()
      }, []);

      const handleGetCardClick  = () => {
          const fetchCard = async () => {
              try {
                  if (!deck) return
                  const newCard = await axios(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
                  setCard(newCard.data.cards[0].images.png)
              } catch {
                  setCard(allGoneImg)
              }
          }
          fetchCard()
      };

      const handleReshuffleClick = () => {
          window.location.reload(false);
      };
  
  return (
    <div>
      <DrawCardBtn card={card} getCard={handleGetCardClick}/>
      {card === allGoneImg ?
          <ReshuffleButton reshuffle={handleReshuffleClick}/> :
          ''
      }
      <br></br>
      <Card cardImg={card}/>
    </div>
  )
};

export default App;