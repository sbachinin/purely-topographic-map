import { set_layers_visibility, get_actual_layers } from './layers.mjs'

export const get_switch = (map, layers_type, is_active, swith_el_selector) => {

    const switch_el = document.querySelector(swith_el_selector)

    const update = () => {
        if (is_active) {
            switch_el.classList.add('active')
        } else {
            switch_el.classList.remove('active')
        }

        set_layers_visibility({
            [layers_type]: is_active
        })

        map.setStyle(
            {
                ...map.getStyle(),
                layers: get_actual_layers()
            },
            { diff: true }
        )
    }

    map.on("load", () => {
        switch_el.addEventListener('click', e => {
            is_active = !is_active
            update()
        })
        update()
    })
}
