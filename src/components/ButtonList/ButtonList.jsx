export const ButtonList = ({ categories, filterCategory }) => {
    return (
        <div className='categories'>
            {categories.map(Category => (
                <button
                    type='button'
                    className='btn-Category'
                    onClick={() => filterCategory(Category)}
                    key={Category}
                >
                    {Category}
                </button>
            ))}
        </div>
    );
};