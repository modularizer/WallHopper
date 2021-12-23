fetch(location.href).then(r=>r.text()).then(r=>document.body.outerHTML=r)
