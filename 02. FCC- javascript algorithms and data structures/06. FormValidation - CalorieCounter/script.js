/* getElementById()

To access an HTML element with a given id name, you can use the getElementById() method. Here's an example of how to use this method:

    Example Code
        <h1 id="title">Main title</h1>

    Example Code
        const mainTitleElement = document.getElementById('title');



.querySelector()
    would select elemenet by id (#) or class (.)
*/

/* Declaring and initializing a boolian variable

In programming, prefixing a variable with is or has is a common practice to signify that the variable represents a boolean value.

Here are a few examples:

    Example Code
        let isRunning = true;
        let hasCompleted = false;


    ! not "true" or "false"
*/

/* handling input type "number"

    When the user inputs for a type of "number", the input field will only accept numerical values. 
    However, if a number is entered with a + or - sign, you'll need to remove those characters.

    Start by declaring a cleanInputString function that takes a str parameter.

    ! NOTE !
    Values from an HTML input field are received as strings in JavaScript. 
    You'll need to convert these strings into numbers before performing any calculations.

*/


/* Regular Experssions. (RegEx)
    Regular expressions (regex) in JavaScript are powerful tools for matching patterns within strings. 


    Creating a Regular Expression pattern:

        You can create a regex in two ways:

            1. Literal notation:

                const re = /ab+c/;

            2. Constructor function:

                const re = new RegExp('ab+c');


            
    Special Characters

        ! Ecaping a special character !
        
            If you need to match a character that is normally a special character, 
            you can escape it with a backslash (\)

            Example: 
            /a\.c/ matches “a.c”, but not “abc”.


        .: 
        Matches any character except newline.

            Example: 
            /a.c/ matches “abc”, “a1c”, “a-c”, etc., but not “ac” or “a\nc”.

        *: 
        Matches 0 or more occurrences of the preceding element.

            Example: 
            /ab*c/ matches “ac”, “abc”, “abbc”, “abbbc”, etc.

        +: 
        Matches 1 or more occurrences of the preceding element.

            Example:
            /ab+c/ matches “abc”, “abbc”, “abbbc”, etc., but not “ac”.

        ?: 
        Matches 0 or 1 occurrence of the preceding element.

            Example: 
            /ab?c/ matches “ac” and “abc”, but not “abbc”.

        ^: 
        Matches the beginning of the string.

            Example: 
            /^abc/ matches “abc” at the start of a string, but not “aabc”.

        $: 
        Matches the end of the string.

            Example: 
            /abc$/ matches “abc” at the end of a string, but not “abcc”.


        ! global flag g !
            Without the g flag, regex methods like match() and exec() will stop after the first match.
            With the g flag, these methods will continue searching through the entire string for all matches.


        ! Combining Special Characters !

            /^a.*c$/
            matches any string that starts with “a” and ends with “c”, with any characters in between.

    
        Email Validation:

            Pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

            Explanation: This regex pattern matches a typical email address format.
        
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            console.log(emailPattern.test('example@example.com')); // true
        
        Phone Number Validation:

            Pattern: 
            /^\(\d{3}\) \d{3}-\d{4}$/

            Explanation: 
            This regex pattern matches a phone number in the format (123) 456-7890.

            const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
            console.log(phonePattern.test('(123) 456-7890')); // true
        
        URL Validation:

            Pattern: 
            /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/

            Explanation: 
            This regex pattern matches a typical URL format.

            const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
            console.log(urlPattern.test('https://www.example.com')); // true
        
        Date Validation (YYYY-MM-DD):

            Pattern: 
            /^\d{4}-\d{2}-\d{2}$/

            Explanation: 
            This regex pattern matches a date in the format YYYY-MM-DD.
            

            const datePattern = /^\d{4}-\d{2}-\d{2}$/;
            console.log(datePattern.test('2024-09-18')); // true
        
        Hex Color Code Validation:

            Pattern: 
            /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

            Explanation: 
            This regex pattern matches a hex color code, with or without the leading #.

            const hexColorPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
            console.log(hexColorPattern.test('#a3c113')); // true
            console.log(hexColorPattern.test('a3c')); // true

        


    Common Methods

        test(): 
        Tests for a match in a string. Returns true or false.
        
            const re = /ab+c/;
            console.log(re.test('abc')); // true
        
        exec(): 
        Executes a search for a match in a string.

            without g flag:
                Returns only the first match

                const str = "Hello, world! Hello, universe!";
                const pattern = /Hello/;
                const match = pattern.exec(str);
                console.log(match);  // Output: ["Hello"]

            with g flag:
                Finds all matches one by one. 
                
                
                Can be used in a loop to iterate through all matches.
                
                    const str = "Hello, world! Hello, universe!";
                    const pattern = /Hello/g;
                    let match;
                    while ((match = pattern.exec(str)) !== null) {
                        console.log(`Found ${match[0]} at index ${match.index}`);
                    }
                        output:
                            Found Hello at index 0
                            Found Hello at index 13

                            ! Explaining the While !
                            When you use the exec() method with the g flag, each call to exec() returns a new match object, which includes the matched string and its index.
                            The match variable is updated with each iteration, so match[0] will reflect the current match found by exec().



        match(): 
        Retrieves the matches when matching a string against a regex. 
        returns An array of matches, or null if no match is found. (due to the global flag g)

            without g flag:
                Returns only the first match

                const str = "Hello, world! Hello, universe!";
                const pattern = /Hello/;
                const matches = str.match(pattern);
                console.log(matches);  
                    // Output: ["Hello"]

            with g flag:
                Finds all matches and returns them as an array. 
                
                const str = "Hello, world! Hello, universe!";
                const pattern = /Hello/g;
                const matches = str.match(pattern);
                console.log(matches);  
                    // Output: ["Hello", "Hello"] 


        replace(): 
        Replaces matched substrings with a new substring.
        
            const str = 'abc';
            console.log(str.replace(/a/, 'x')); // 'xbc'

        search(): 
        Searches for a match in a string and returns the index of the first match, or -1 if not found.

            const str = 'abbc';
            console.log(str.search(/ab+c/)); // 0

        split(): 
        Splits a string into an array of substrings using the regex as a delimiter.

            const str = 'aabbcc';
            console.log(str.split(/b+/)); // ['aa', 'cc']



    


*/