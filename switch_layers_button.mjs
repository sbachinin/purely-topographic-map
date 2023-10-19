export const get_switch = (map, layers_of_type, is_active, swith_el_selector) => {

    const switch_el = document.querySelector(swith_el_selector)
    const layers_of_type_ids = layers_of_type.map(l => l.id)
    
    const update = () => {
        const style = map.getStyle()
        let all_layers = [...style.layers]
        if (is_active) {
            all_layers.push(...layers_of_type)
            switch_el.classList.add('active')
        } else {
            all_layers = all_layers.filter(l => !layers_of_type_ids.includes(l.id))
            switch_el.classList.remove('active')
        }
    
        map.setStyle(
            { ...style, layers: all_layers },
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
