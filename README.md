Shortener
The idea for the project was conceived by the research team of the inforce company, and implemented as a test task for the position of a third-party .net developer by Lyubomir Vovchak using the following technologies: .Net, React, MsSQL

The main idea is to make a user-friendly site for shortening links. Your first instinct might be to just hash the original URL and use it as a token, which will of course provide a lot of uniqueness, but short hash functions are often unreliable and sooner or later you'll run into the birthday paradox problem, which isn't as fun as sounds

Right so how to guarantee a unique token, really simple, I resort back to good old randomization. The plan is to generate a string of random characters between 2 and 6 characters in length. Using the full English alphabet plus all numerals from 0-9 that gives us 62 available characters, meaning we have:

(62^2) + (62^3) + (62^4) + (62^5) + (62^6) possible unique tokens, which is equal to: `57 billion 731 million 386 thousand 924'

The process of generating a short link is activated immediately upon creation, and despite the very small chance of this, it still passes an additional check for the presence of the same generated short link in the database.

![alt text](https://github.com/Lyubomyr21/Shortener-Inforce/tree/master/Shortener/ReactFront/link-shortener/public/screenshot1.png?raw=true)
