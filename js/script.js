AOS.init();

const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const popupSlide = document.querySelector('#popupSlide');
const sliderItem = document.querySelectorAll('.our_requirements_content_item');
const sliderPhoto = document.querySelector('.our_requirements_img');
const body = document.body;
const casualLogo = document.querySelector('.logo-white');
const colorLogo = document.querySelector('.logo-color');

burger.addEventListener('click', burgerHandler);
popup.addEventListener('click', (e) => {
  burgerHandler(e);
});

function burgerHandler(e) {
  if (popup.classList.contains('open')) {
    popup.classList.add('close');
    body.classList.remove('noscroll');
    popupSlide.classList.add('slideout');

    setTimeout(() => {
      // colorLogo.classList.remove('logo-hide');
      // casualLogo.classList.add('logo-hide');
    }, 270);
    setTimeout(() => {
      popup.classList.remove('close');
      popup.classList.remove('open');
      popupSlide.classList.remove('slideout');
      popupSlide.classList.remove('slidein');
    }, 270);
  } else {
    body.classList.add('noscroll');
    popup.classList.add('open');
    popupSlide.classList.add('slidein');
    setTimeout(() => {
      //   casualLogo.classList.remove('logo-hide');
      // colorLogo.classList.add('logo-hide');
      colorLogo.classList.remove('logo-hide');
      casualLogo.classList.add('logo-hide');
    }, 270);
  }
  burger.classList.toggle('active');
}

function scrollToPrice() {
  document.querySelector('#price').scrollIntoView(true);
}
function scrollToHIW() {
  document.querySelector('#hiw').scrollIntoView(true);
}
function scrollToReviews() {
  document.querySelector('#reviews').scrollIntoView(true);
}
function scrollToReviews() {
  document.querySelector('#reviews').scrollIntoView(true);
}
function scrollToTeam() {
  document.querySelector('#team').scrollIntoView(true);
}
function scrollToSub() {
  document.querySelector('#sub').scrollIntoView(true);
}
const accordeonMore = document.querySelector('.wrap_accordeon');
const showMorebutton = document.querySelector('.show_more');
const hideButton = document.querySelector('.hide_more');
function showmore() {
  accordeonMore.classList.add('wrap_accordeon_block');
  showMorebutton.classList.add('wrap_accordeon');
  hideButton.classList.add('flex_flex');
}
function hidemore() {
  accordeonMore.classList.remove('wrap_accordeon_block');
  showMorebutton.classList.remove('wrap_accordeon');
  hideButton.classList.remove('flex_flex');
}

data = {
  type: 'subscription',
  attributes: {
    custom_source: 'Homepage footer signup form',
    profile: {
      data: {
        type: 'profile',
        id: '01GDDKASAP8TKDDA2GRZDSVP4H',
        attributes: {
          email: 'sarah.mason@klaviyo-demo.com',
          phone_number: '+15005550006',

          first_name: 'Sarah',
          last_name: 'Mason',
          organization: 'Klaviyo',
          title: 'Engineer',
          image: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg',
          location: {},
          properties: { newKey: 'New Value' },
          meta: {
            patch_properties: {
              append: { newKey: 'New Value' },
              unappend: { newKey: 'New Value' },
              unset: 'skus',
            },
          },
        },
      },
    },
  },
  relationships: { list: { data: { type: 'list', id: 'XRbt5p' } } },
};

console.log(data.attributes.profile.data.attributes);

//update this with your js_form selector
var form_id_js = 'javascript_form';

var data_js = {
  access_token: 'b6ptufawi5qmc6uw1hqngyoz',
};

function js_onSuccess() {
  window.location = 'thankyou.html';
}

function js_onError(error) {
  // remove this to avoid redirect
  window.location = window.location.pathname + '?message=Email+could+not+be+sent.&isError=1';
}

var sendButton = document.getElementById('js_send');

function js_send() {
  sendButton.value = 'Sending…';
  sendButton.disabled = true;
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      js_onSuccess();
    } else if (request.readyState == 4) {
      js_onError(request.response);
    }
  };

  var subject = document.querySelector('#' + form_id_js + " [name='Subject']").value;
  var message = document.querySelector('#' + form_id_js + " [name='text']").value;
  var name = document.querySelector('#' + form_id_js + " [name='extra_name']").value;
  var lastName = document.querySelector('#' + form_id_js + " [name='extra_Last_name']").value;
  var email = document.querySelector('#' + form_id_js + " [name='extra_email']").value;
  var phone = document.querySelector('#' + form_id_js + " [name='extra_phone_number']").value;
  var height = document.querySelector('#' + form_id_js + " [name='extra_Height']").value;
  var weight = document.querySelector('#' + form_id_js + " [name='extra_Weight']").value;
  var age = document.querySelector('#' + form_id_js + " [name='extra_Age']").value;
  data_js['subject'] = subject;
  data_js['text'] = message;
  data_js['extra_name'] = name;
  data_js['extra_Last_name'] = lastName;
  data_js['extra_email'] = email;
  data_js['extra_phone_number'] = phone;
  data_js['extra_Height'] = height;
  data_js['extra_Weight'] = weight;
  data_js['extra_Age'] = age;

  data.attributes.profile.data.attributes.first_name = name;
  data.attributes.profile.data.attributes.last_name = lastName;
  data.attributes.profile.data.attributes.email = email;
  if (phone[0] == '+') {
    data.attributes.profile.data.attributes.phone_number = phone;
  } else if (phone[0] == 1) {
    data.attributes.profile.data.attributes.phone_number = '+' + phone;
  } else {
    data.attributes.profile.data.attributes.phone_number = '+1' + phone;
  }
  console.log(data.attributes.profile.data.attributes.phone_number);

  const options = {
    method: 'POST',
    headers: { revision: '2023-10-15', 'content-type': 'application/json' },
    body: JSON.stringify({ data }),
  };
  fetch('https://a.klaviyo.com/client/subscriptions/?company_id=X3HpFg', options)
    .then((response) => response)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  var params = toParams(data_js);

  request.open('POST', 'https://postmail.invotes.com/send', true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  request.send(params);

  return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
  var form_data = [];
  for (var key in data_js) {
    form_data.push(encodeURIComponent(key) + '=' + encodeURIComponent(data_js[key]));
  }

  return form_data.join('&');
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener('submit', function (e) {
  e.preventDefault();
});
