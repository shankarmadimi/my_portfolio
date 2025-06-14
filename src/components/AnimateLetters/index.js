// Import the SCSS file for styling
import './index.scss';

// Functional component to animate letters in a staggered way
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                // Map through each character in the strArray (like "Hello," or "Shankar Madimi")
                strArray.map((char, i) => (
                    // Generate a span for each character with a unique key and dynamic class name
                    <span 
                        key={char + i} // Unique key for each character to avoid React warnings
                        className={`${letterClass} _${i + idx}`} // Dynamically assign class with index
                    >
                        {char} {/* Render the character */}
                    </span>
                ))
            }
        </span>
    );
}

// Export the component to use it in other parts of the app
export default AnimatedLetters;
