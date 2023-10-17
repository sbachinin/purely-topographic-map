let root = document.documentElement

const possible_steps = [
    1, 5, 10, 25, 50, 100, 250, 500, 1000, 2000, 5000
]

const scale_item_labels = []


const update_scale = (fullwidth_scale_width, native_scale_el) => {

    // 1. set width
    const ratio = fullwidth_scale_width / (parseFloat(native_scale_el.style.width) - 4) // 4 is 2 borders
    const native_scale_number = parseInt(native_scale_el.innerText, 10)
    const fullwidth_scale_number = native_scale_number * ratio

    const max_number_step = fullwidth_scale_number / (fullwidth_scale_width / 200)

    let step_num = possible_steps.find((_, i) => {
        return (i === possible_steps.length - 1
            || possible_steps[i + 1] > max_number_step)
    })
    const step_count = fullwidth_scale_number / step_num
    const step_width = fullwidth_scale_width / step_count

    root.style.setProperty('--scale-step-width', step_width + 'px')


    // 2. set labels
    let scale_units = native_scale_el.innerText.match(/[A-Za-z]+$/)[0]
    
    // prevent change from '1000m' to '1km', use only '1km'
    if (step_num === 1000 && scale_units === 'm') {
        step_num = 1
        scale_units = 'km'
    }

    scale_item_labels.forEach((l, i) => {
        let text = step_num * (i + 1)
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

    const fullwidth_scale_wr = document.querySelector('.fullwidth-scale-wrapper')

    fullwidth_scale_wr.style.display = 'block'
    const fullwidth_scale_width = fullwidth_scale_wr.getBoundingClientRect().width

    for (let i = 0; i < 20; i++) {
        fullwidth_scale_wr.firstElementChild.appendChild(create_scale_item(i))
    }
    
    update_scale(fullwidth_scale_width, native_scale_el)

    const observer = new MutationObserver(() => update_scale(fullwidth_scale_width, native_scale_el))
    observer.observe(
        native_scale_el,
        { attributes: true, childList: true, subtree: true }
    )
}