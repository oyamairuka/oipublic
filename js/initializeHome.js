function initialize() {
    document.getElementById('catchphrase').textContent = catchphrase;
    document.getElementById('catchphraseEx').innerHTML = catchphraseEx;
    document.getElementById('contactButtonTop').textContent = contactButtonCaption;

    document.getElementById('feature_name').textContent = FEATURE.name;
    document.getElementById('feature_title').textContent = FEATURE.title;
    document.getElementById('feature_caption1').innerHTML = FEATURE.caption1;
    document.getElementById('feature_caption2').innerHTML = FEATURE.caption2;
    document.getElementById('feature_caption3').innerHTML = FEATURE.caption3;
    document.getElementById('featureButtonTop').textContent = FEATURE.buttonCaption;

    document.getElementById('service_name').textContent = SERVICE.name;
    document.getElementById('service_title').textContent = SERVICE.title;
    document.getElementById('service_caption1').innerHTML = SERVICE.caption1;
    document.getElementById('service_caption2').innerHTML = SERVICE.caption2;
    document.getElementById('service_caption3').innerHTML = SERVICE.caption3;
    document.getElementById('serviceButtonTop').textContent = SERVICE.buttonCaption;

    document.getElementById('contact_name').textContent = CONTACT.name;
    document.getElementById('contact_title').textContent = CONTACT.title;
    document.getElementById('contactButtonBottom').textContent = CONTACT.buttonCaption;
}

initialize();