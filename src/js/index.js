const calcultateClassifierBtn = document.querySelector('#calculate-classifier')
const resultHeroName = document.querySelector('#result-hero-name')
const resultHeroLevel = document.querySelector('#result-hero-level')

calcultateClassifierBtn.addEventListener('click', () => {
    const heroNameInput = document.querySelector('#hero-name').value
    const heroXpInput = document.querySelector('#hero-level').value

    const heroXp = Number(heroXpInput)

    const heroLevel = calculateHeroLevel(heroXp)

    resultHeroName.textContent = heroNameInput
    resultHeroLevel.textContent = heroLevel
})

const calculateHeroLevel = (heroXp) => {
    let heroClassifier = ""

    switch (true){
        case (heroXp <= 1000):
            heroClassifier = "Ferro"
            break
        
        case (heroXp >= 1001 && heroXp <= 2000):
            heroClassifier = "Bronze"
            break

        case (heroXp >= 2001 && heroXp <= 5000):
            heroClassifier = "Prata"
            break

        case (heroXp >= 5001 && heroXp <= 7000):
            heroClassifier = "Ouro"
            break

        case (heroXp >= 7001 && heroXp <= 8000):
            heroClassifier = "Platina"
            break

        case (heroXp >= 8001 && heroXp <= 9000):
            heroClassifier = "Ascendente"
            break

        case (heroXp >= 9001 && heroXp <= 10000):
            heroClassifier = "Imortal"
            break

        case (heroXp >= 10001):
            heroClassifier = "Radiante"
            break

        default: 
            heroClassifier = "XP não compatível com nenhum nível."
    }

    return heroClassifier
}