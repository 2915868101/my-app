(function() {
  try {
    var css = $(`<style>
       .steedos .slds-global-header .slds-global-header__item--logo {
            display:none
        }
    </style>`);
    console.log('aaa=>')
    $("head").append(css);
  } catch (error) {
  console.log(error);
  }
})();