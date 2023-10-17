let root = document.documentElement

const possible_steps = [
    1, 2, 5, 10, 25, 50, 100, 250, 500, 1000, 2000, 5000
]

const scale_item_labels = []

const MIN_SCALE_ITEM_WIDTH = 80
const MAX_SCALE_ITEMS_COUNT = 15

const fullwidth_scale_wr = document.querySelector('.fullwidth-scale-wrapper')
const fullwidth_scale_width = fullwidth_scale_wr.getBoundingClientRect().width // TODO needs update on resize
const items_viewport_limit = Math.ceil(fullwidth_scale_width / MIN_SCALE_ITEM_WIDTH)
const max_scale_items_count = Math.min(items_viewport_limit, MAX_SCALE_ITEMS_COUNT)

const update_scale = (native_scale_el) => {

    // 1. set width
    const ratio = fullwidth_scale_width / (parseFloat(native_scale_el.style.width) - 4) // 4 is 2 borders
    const native_scale_value = parseInt(native_scale_el.innerText, 10)
    const fullwidth_scale_value = native_scale_value * ratio
    
    const min_step_value = fullwidth_scale_value / max_scale_items_count

    let step_value = possible_steps.find(s => s > min_step_value)

    const step_count = fullwidth_scale_value / step_value
    const step_width = fullwidth_scale_width / step_count

    root.style.setProperty('--scale-step-width', step_width + 'px')


    // 2. set labels
    let scale_units = native_scale_el.innerText.match(/[A-Za-z]+$/)[0]
    
    // prevent change from '1000m' to '1km', use only '1km'
    if (step_value === 1000 && scale_units === 'm') {
        step_value = 1
        scale_units = 'km'
    }

    scale_item_labels.forEach((l, i) => {
        let text = step_value * (i + 1)
        if (i === 0) {
            text += ' ' + scale_units
        }
        if (text !== l.innerText) {
            l.innerText = text
        }
    })
}


const create_scale_item = (i) => {
    const scale_item_el = document.createElement('div')
    scale_item_el.classList.add('scale-item')

    const scale_item_label_el = document.createElement('div')
    scale_item_label_el.classList.add('scale-item-label')

    scale_item_el.appendChild(scale_item_label_el)
    scale_item_labels.push(scale_item_label_el)

    return scale_item_el
}


export const manage_scale = () => {

    const native_scale_el = document.querySelector('.maplibregl-ctrl.maplibregl-ctrl-scale')
    if (native_scale_el === null) return

    fullwidth_scale_wr.style.visibility = 'visible'
    for (let i = 0; i < max_scale_items_count; i++) {
        fullwidth_scale_wr.firstElementChild.appendChild(create_scale_item(i))
    }
    
    update_scale(native_scale_el)

    const observer = new MutationObserver(() => update_scale(native_scale_el))
    observer.observe(
        native_scale_el,
        { attributes: true, childList: true, subtree: true }
    )
}