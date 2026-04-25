"use client"

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCatagory, setStep } from '../redux/counterSlice'
import {
    RiMoneyDollarCircleLine,
    RiLightbulbLine,
    RiUserStarLine,
    RiGroupLine
} from 'react-icons/ri'
import '../css/categories.css'
import { getClicksLeft, useClick } from '@/utils/clicks'

type Category = "money" | "skills" | "self" | "social"

interface CategoryItem {
    id: Category
    title: string
    description: string
    icon: React.ReactNode
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
]

const Categories: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
    const [clicksLeft, setClicksLeft] = useState(3)

    const dispatch = useDispatch()

    useEffect(() => {
        setClicksLeft(getClicksLeft())
    }, [])

    const handleGetIdea = () => {
        if (!selectedCategory) return

        const success = useClick()
        if (!success) return

        setClicksLeft(getClicksLeft())

        dispatch(setCatagory(selectedCategory))
        dispatch(setStep('card'))
    }

    const isDisabled = !selectedCategory || clicksLeft <= 0

    return (
        <div className="categories-container">

            <h1 className="categories-title">Choose Your Focus</h1>

            <div className="categories-grid">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        <div className="category-icon">{category.icon}</div>
                        <h3 className="category-title">{category.title}</h3>
                        <p className="category-description">{category.description}</p>
                    </div>
                ))}
            </div>

            <button
                className={`get-idea-btn ${isDisabled ? 'disabled' : 'active'}`}
                onClick={handleGetIdea}
                disabled={isDisabled}
            >
                {clicksLeft <= 0 ? "No clicks left" : "Get Idea"}
            </button>

            <p className="click-left-span">
                {clicksLeft > 0
                    ? `${clicksLeft} clicks left today`
                    : "Come back tomorrow"}
            </p>

        </div>
    )
}

export default Categories