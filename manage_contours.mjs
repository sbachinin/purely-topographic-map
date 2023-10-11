import { layers } from './layers.mjs'
import { contour_layers } from './contour_layers.mjs'

export const manage_contours = (map, style) => {

    let contours_shown = true
    const contour_switch = document.querySelector('.contour-switch')
            
    const orig_layers = [...layers]
    
    const update_contours = () => {
        const layers = [...orig_layers]
        if (contours_shown) {
            layers.push(...contour_layers)
            contour_switch.classList.add('active')
        } else {
            contour_switch.classList.remove('active')
        }
    
        map.setStyle(
            { ...style, layers },
            { diff: true }
        )
    }
    
    contour_switch.addEventListener('click', e => {
        contours_shown = !contours_shown
        update_contours()
    })

    update_contours()
}

