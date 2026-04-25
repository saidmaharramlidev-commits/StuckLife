export const MAX_CLICKS = 3

export function getClicksLeft() {
    const today = new Date().toDateString()
    const lastDate = localStorage.getItem("lastDate")
    let count = Number(localStorage.getItem("clickCount") || "0")

    if (lastDate !== today) {
        localStorage.setItem("lastDate", today)
        localStorage.setItem("clickCount", "0")
        count = 0
    }

    return MAX_CLICKS - count
}

export function useClick() {
    const count = Number(localStorage.getItem("clickCount") || "0")

    if (count >= MAX_CLICKS) return false

    const newCount = count + 1
    localStorage.setItem("clickCount", newCount.toString())

    return true
}