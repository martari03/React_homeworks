import {SimpsonMember} from "../SimpsonMember/SimpsonMember";

export const Simpsons = () => {
    const simpsonsHeader = 'Simpsons';
    const simpsons = [{
        id: 1,
        name: 'Homer Simpson',
        image: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png',
        bio: 'Homer Jay Simpson (born May 12, 1956) is a man from Springfield.'
    }, {
        id: 2,
        name: 'Marge Simpson',
        image: 'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png',
        bio: 'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is the homemaker and matriarch of the Simpson family.'
    }, {
        id: 3,
        name: 'Bart Simpson',
        image: 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png',
        bio: 'Bartholomew JoJo "Bart" Simpson (born February 23 or April 1, 1980) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.'
    }, {
        id: 4,
        name: 'Lisa Simpson',
        image: 'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png',
        bio: 'Lisa Marie Simpson (born May 9, 1983) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'
    }, {
        id: 5,
        name: 'Maggie Simpson',
        image: 'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png',
        bio: 'Margaret Evelyn Lenny "Maggie" Simpson (born January 14, 1988) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons.'
    }];
    return (
        <div className="Simpsons">
            <h2>{simpsonsHeader}</h2>
            <div className="members">
                {
                    simpsons.map(simpson => <SimpsonMember key={simpson.id} name={simpson.name} image={simpson.image}
                                                           bio={simpson.bio}/>)
                }
            </div>
        </div>
    );
};