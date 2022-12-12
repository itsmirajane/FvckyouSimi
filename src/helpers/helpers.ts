export const curl = {

    baseUrl: 'https://app.proofofhumanity.id/',
    selector: {
        totalImg: '#__next > div > div > main > div > div.css-dubisb'
    }

}

export const randomNumber = (min: number, max: number) => {

    if( min > max ) {
        return( -1 );
    }
    if( min == max ) {
        return( min );
    }

    return( Math.floor( Math.random() * ( max - min + 1 ) ) + min );

}

export const multipleBy = (num: number) => {

    return randomNumber(0, 1000) * num;

}