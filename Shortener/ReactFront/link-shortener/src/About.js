import React,{Component} from 'react';
import Badge from 'react-bootstrap/Badge';

export class About extends Component{

    render(){
        return(
            <div className="mt-5 d-flex justify-content-left">
                <font  size="5" >
                
                <div class="text-block">
                    The idea for the project was conceived by the research team of the <em><b>Inforce</b></em> company, 
                    and implemented as a test task for the position of a third-party .net developer by  
                    <em><b> Liubomyr Vovchak</b></em> using the following technologies: .Net, React, MsSQL.
                </div><br></br>
                <div class="text-block">
                    The main idea is to make a user-friendly site for shortening links. Your first instinct 
                    might be to just hash the original URL and use it as a token, which will of course provide 
                    a lot of uniqueness, but short hash functions are often unreliable and sooner or later 
                    you'll run into the birthday paradox problem, which isn't as fun as sounds
                </div><br></br>
                <div class="text-block">
                    Right so how to guarantee a unique token, really simple, we resort back to good old 
                    randomization. The plan is to generate a string of random characters between 2 and 6 
                    characters in length. Using the full English alphabet plus all numerals from 0-9 that 
                    gives us 62 available characters, meaning we have:
                </div><br></br>
                <div class="text-block">
                    <Badge bg="warning" text="dark">(62^2) + (62^3) + (62^4) + (62^5) + (62^6)</Badge> possible 
                    unique tokens, which is equal to: <Badge bg="success">57 billion 731 million 386 thousand 924</Badge>
                </div><br></br>
                <div class="text-block">
                    The process of generating a short link is activated immediately upon creation, and despite 
                    the very small chance of this, it still passes an additional check for the presence of 
                    the same generated short link in the database.
                </div><br></br>
                </font>

            </div>
        )
    }
}
