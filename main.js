// scope - a concept of where something is available
//global scope
//local scope


//global execution context/scope
const name = "Dennis Wachira";
const age = "24"; //global variable

console.log(name);

if (age > 20) {
    console.log ('This man is old');
}else{
    console.log('This is a young man');
}

function displayAge (){

    //function execution context/scope
    const age =21;// local variable
    console.log(age);
}

displayAge();

function addTwoNumbers(num1, num2){
    const sum = num1 + num2;

    return sum;
}


function ageExponent() {
    return age ** 2;
}

console.log(ageExponent());


console.log (addTwoNumbers(4,5));
//console.log(sum);



//SCOPE CHAIN

// A child can access the parent but the parent cannot acces the child


//polygamy- 4 wives

const husband = 'Mustafa Ali';

function wives() {
    function firstWife() {
        const wife1 = 'Fatma Mohammed';

        function secondWife() {
            const wife2 = 'Halima Ayub';

            function thirdWife() {
                const wife3 = 'Rahma Mohhamad';

                function fourthWife() {
                    const wife4 = 'Nasra Adan';
                    return `${wife1} -> ${wife2} -> ${wife3} -> ${wife4}`; // Removed extra `}`
                }

                return fourthWife(); // Call fourthWife properly
            }

            return thirdWife(); // Call thirdWife properly
        }

        return secondWife(); // Call secondWife properly
    }

    return `Husband Name: ${husband} listed wives: ${firstWife()}`; // Call firstWife
}

console.log(wives());


