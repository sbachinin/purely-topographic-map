import { country_layers } from './country_layers.mjs'

const country_layers_ids = country_layers.map(l => l.id)

export const manage_countries = (map) => {

    let countries_shown = false
    const countries_switch = document.querySelector('.countries-switch')
    
    const update_countries = () => {
        const style = map.getStyle()
        let layers = [...style.layers]
        if (countries_shown) {
            layers.push(...country_layers)
            countries_switch.classList.add('active')
        } else {
            layers = layers.filter(l => !country_layers_ids.includes(l.id))
            countries_switch.classList.remove('active')
        }

        map.setStyle(
            { ...style, layers },
            { diff: true }
        )
    }
    
    map.on("load", () => {
        countries_switch.addEventListener('click', e => {
            countries_shown = !countries_shown
            update_countries()
        })
        update_countries()
    })
}

