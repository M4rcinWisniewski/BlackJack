export default function Deck() {
    type deckType = {
        rank: string
        suit: string
      }
      
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
      const suits = ['Heart', 'Club', 'Diamond', 'Spade'];
      
      const generateDeck = () => {
          let deck = [];
          for (let i = 0; i < ranks.length; i++) {
              for (let j = 0; j < suits.length; j++) {
                  deck.push({rank: ranks[i], suit: suits[j]});
              }
          }
          return deck;
      }
      
      const shuffleDeck = (deck: Array<deckType>) => {
          for (let i = deck.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
          }
          return deck;
      }
      
      // Generate and shuffle the deck
      let deck = generateDeck();
      deck = shuffleDeck(deck);
      
      console.log(deck.length);
      

    return (
        <main>

        </main>
    )
}