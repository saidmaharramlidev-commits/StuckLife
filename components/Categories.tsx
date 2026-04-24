import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCatagory, setStep } from '../redux/counterSlice';
import { RiMoneyDollarCircleLine, RiLightbulbLine, RiUserStarLine, RiGroupLine } from 'react-icons/ri';
import '../css/categories.css';

interface CategoryItem {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const categories: CategoryItem[] = [
    {
        id: 'money',
        title: 'Money',
        description: 'Boost your financial health',
        icon: <RiMoneyDollarCircleLine size={40} />,
    },
    {
        id: 'skills',
        title: 'Skills',
        description: 'Learn new abilities',
        icon: <RiLightbulbLine size={40} />,
    },
    {
        id: 'self',
        title: 'Self Improvement',
        description: 'Grow personally',
        icon: <RiUserStarLine size={40} />,
    },
    {
        id: 'social',
        title: 'Social Life',
        description: 'Enhance relationships',
        icon: <RiGroupLine size={40} />,
    },
];

const Categories: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const dispatch = useDispatch();

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategory(categoryId);
    };

    const handleGetIdea = () => {
        if (selectedCategory) {
            dispatch(setCatagory(selectedCategory));
            dispatch(setStep('card'));
        }
    };

    return (
        <div className="categories-container">
            <div className="categories-grid">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        <div className="category-icon">{category.icon}</div>
                        <h3 className="category-title">{category.title}</h3>
                        <p className="category-description">{category.description}</p>
                    </div>
                ))}
            </div>
            <button
                className={`get-idea-btn ${selectedCategory ? 'active' : 'disabled'}`}
                onClick={handleGetIdea}
                disabled={!selectedCategory}
            >
                Get Idea
            </button>
        </div>
    );
};

export default Categories;