import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>Knock knock</h2>
            <p>Current user is: {user? user.displayName : 'Nobody'} </p>
        </div>
    );
};

export default Products;