const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCouter = () => {
    const target = Number(counter.getAttribute('data-target'))
    const c = Number(counter.innerText)

    const increment = target / 200

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCouter, 1)
    } else {
      counter.innerText = target
    }
  }

  updateCouter()
})
