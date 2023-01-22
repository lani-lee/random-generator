/*
  This is the DadJoke object modeled after the API response.
  API returns data as JSON that looks like this (an array of joke objects):
  [
    {
      "joke": "To the person who stole my place in line: I’m after you now."
    },
    {
      "joke": "How does a penguin build a house? Igloos it together."
    }
  ]
*/
export interface DadJoke {
  joke: string
}
