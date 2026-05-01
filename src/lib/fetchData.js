export const sunglassesData = async () => {
    const res = await fetch('https://assignment-8-puce.vercel.app/data.json')
    return res.json()
}