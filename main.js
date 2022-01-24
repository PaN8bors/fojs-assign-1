import input from 'input';

async function main() {
    const answer = 'My Password';
    const response = await input.text('What is the password?');

    if (answer == response) {
        console.log('Correct!')

    } else {
        console.log('Incorrect')
    }
}

main();