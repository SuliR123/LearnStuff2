import { useState } from "react"

export const Landing: React.FC = () => {
    //create a const, and set it to 0
    const [count, setCount] = useState<number>(0);

    //the annoying thing is, is that the frog image renders inline, like it goes right into the text, is there
    //a better way of styling this
    return (
        <h2>
            <h3>Click Me to See Magic Happen</h3>
            <img onClick={e => setCount(count + 1)} src="https://cdn.dribbble.com/users/1044993/screenshots/5945543/media/4f75b2ce7a66bb8f3704f7fcbb40d8f9.png?compress=1&resize=400x300&vertical=top"></img>
            <h3>The current Count of this button is {count}</h3>

        </h2>
        //also can style this with tailwind maybe to center this?
    );

}