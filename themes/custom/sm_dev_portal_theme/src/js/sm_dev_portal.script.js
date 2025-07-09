(function ($) {
  /** @ Functions **/
  $.fn.equalHeights = function () {
    var max_height = 0;
    $(this).each(function () {
      max_height = Math.max($(this).height(), max_height);
    });
    $(this).each(function () {
      $(this).height(max_height);
    });
  };

  var iv;

  if (iv !== null) {
    window.clearTimeout(iv);
  }

  if ($("div#toolbar-administration").length) {
    var toolbar_parent_elem = $("div#toolbar-administration");
    var toolbar_nav_elem = toolbar_parent_elem.find("nav#toolbar-bar");
    var toolbar_tab = toolbar_nav_elem.find("div.toolbar-tab");
    var toolbar_item = toolbar_tab.find("a.toolbar-item");
  }

  $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");

    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });

  if ($("form.smdp-user-register-form").length) {
    var user_register_form = $("form.smdp-user-register-form");
  }

  if ($("div.smdp-credential-revoked").length) {
    let $accordion = $("div.smdp-credential-revoked").find(".accordion");

    $accordion
      .find('button[aria-controls="collapseDetails"]')
      .on("click", function () {
        let $accordionBodyID = "#" + $(this).attr("aria-controls");
        let $accordionBody = $("div.smdp-credential-revoked").find(
          $accordionBodyID
        );

        if ($accordionBody.hasClass("show") == false) {
          $accordionBody.addClass("show");
        } else {
          $accordionBody.removeClass("show");
        }
      });
  }

  iv = setTimeout(function () {
    if ($("form.smdp-user-register-form").length) {
      let detach_elem = user_register_form
        .find(".password-suggestions")
        .detach();
      $(".smdp-password-suggestions").prepend(detach_elem);
    }

    if ($("nav.smdp-breadcrumb-wrapper").length) {
      let breadcrumbs = $("nav.smdp-breadcrumb-wrapper").find("ol.breadcrumb");
      let item_exemption = breadcrumbs.find("li.br-item-exemption");
      let detach_item = item_exemption.detach();
      breadcrumbs.append(detach_item);
    }

    if ($("form").length) {
      var form = $("form");

      if (form.find('select[multiple="multiple"]').length) {
        form.find('select[multiple="multiple"]').bsMultiSelect({
          selectedPanelFocusBorderColor: "#007bff",
          selectedPanelFocusBoxShadow: "none",
          inputColor: "#495057",
          useCss: true,
          dropDownMenuClass: "dropdown-menu rounded-0",
          dropDownItemClass: "px-4 py-1",
          dropDownItemHoverClass: "text-primary bg-light",
          selectedPanelClass: "form-control",
          selectedItemClass: "pr-1 pb-1 select-list-item",
          removeSelectedItemButtonClass: "close",
          filterInputItemClass: "",
          filterInputClass: "inputSearch",
          selectedPanelFocusClass: "focus",
        });
      }

      if (form.find(".dashboardcode-bsmultiselect").length) {
        let select_multiselect = form
          .find(".dashboardcode-bsmultiselect")
          .find("ul.form-control");
        select_multiselect.find("input.inputSearch").prop("readonly", true);
      }
    }

    if ($("div.indented").length) {
      let comment_inside = $("div.indented").find("article.smdp-comments");
      let comment_inside_reply = comment_inside.find(
        ".comment-links ul.links li.comment-reply"
      );
      comment_inside_reply.detach();
    }

    if ($("div.app-analytics-result").length) {
      let app_analytics_result = $("div.app-analytics-result");

      if (app_analytics_result.find("div#chart_container").length) {
        app_analytics_result
          .find("div#chart_container")
          .addClass("table-responsive");
        app_analytics_result
          .find("div#chart_container")
          .css("overflow-y", "hidden");
      }
    }
  }, 500);

  if ($(".wsdl-payload-entity").length) {
    $(".wpe-operations-select").on("change", function () {
      $(".xml-envelope")
        .find(".col-left")
        .removeClass("col-lg-7")
        .addClass("col-lg-10");
      $(".xml-envelope")
        .find(".col-right")
        .removeClass("col-lg-5")
        .addClass("col-lg-2");

      iv = setTimeout(function () {
        let $active_envelope = $(".xml-envelope.active");
        let $response_wrapper = $active_envelope.find(
          "div.sm-response-wrapper"
        );

        let $code_sample_language_icons = $active_envelope.find(
          ".sm-code-sample-language-icons"
        );
        let $anchor = $code_sample_language_icons.find("a.sm-show-sample");

        $.each($anchor, function (i, val) {
          let $a_data_identity = $(this).data("identity");
          let $d_code_samples = $(
            "div.code-samples[data-identity=" + $a_data_identity + "]"
          );
          let $textarea = $d_code_samples.find(
            "textarea.sm-textarea--code-samples"
          );

          $anchor.removeClass("active");
          $anchor.find("span").removeAttr("style");
          $anchor.parent().removeClass("shrink");
          $anchor
            .parent()
            .parent()
            .find("div.sm-code-wrapper")
            .removeClass("shrink");

          $(this).on("click", function () {
            if ($response_wrapper.hasClass("visually-hidden") == false) {
              $anchor.removeClass("active");
              $anchor.find("span").css("display", "none");
              $(this).parent().addClass("shrink");
              $(this)
                .parent()
                .parent()
                .find("div.sm-code-wrapper")
                .addClass("shrink");
              $(this).addClass("active");

              $active_envelope
                .find(".col-left")
                .removeClass("col-lg-10")
                .addClass("col-lg-7");
              $active_envelope
                .find(".col-right")
                .removeClass("col-lg-2")
                .addClass("col-lg-5");
            } else {
              //nothing here
            }
          });
        });
      }, 100);
    });
  }

  $(window)
    .on("load resize", function () {
      let winwidth = window.innerWidth;

      if ($("section.smdp-app-list").find("div.smdp-app-cards").length) {
        let app_cards = $("section.smdp-app-list").find("div.smdp-app-cards");
        let card_body = app_cards.find("div.card-body");

        if (winwidth > 767) {
          app_cards.removeAttr("style");
          app_cards.equalHeights();
        } else {
          app_cards.removeAttr("style");
        }
      }

      if ($(".smdp-card").length) {
        let cards = $(".smdp-card:not(.smdp-card-gen)");
        let card_body = cards.find(".card-body");

        if (cards.hasClass("smdp-apis") == false) {
          if (winwidth > 767) {
            cards.removeAttr("style");
            cards.equalHeights();
          } else {
            cards.removeAttr("style");
          }
        } else {
          if (winwidth > 767) {
            cards.removeAttr("style");
            cards.equalHeights();
          } else {
            cards.removeAttr("style");
          }
        }
      }
    })
    .resize();
})(jQuery);

(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.sm_dev_portal = {
    attach: function (context, settings) {
      $(document).ajaxSuccess(function (event, data) {
        /** @ reinitialize form select on Better Exposed filter API Products **/
        if (
          drupalSettings &&
          drupalSettings.views &&
          drupalSettings.views.ajaxViews
        ) {
          var ajaxViews = drupalSettings.views.ajaxViews;
          Object.keys(ajaxViews || {}).forEach(function (i) {
            if (
              ajaxViews[i]["view_name"] == "blogs" &&
              ajaxViews[i]["view_display_id"] == "blog_list"
            ) {
              if ($("form").length) {
                var form = $("form");
                if (form.find('select[multiple="multiple"]').length) {
                  form.find('select[multiple="multiple"]').bsMultiSelect({
                    selectedPanelFocusBorderColor: "#007bff",
                    selectedPanelFocusBoxShadow: "none",
                    inputColor: "#495057",
                    useCss: true,
                    dropDownMenuClass: "dropdown-menu rounded-0",
                    dropDownItemClass: "px-4 py-1",
                    dropDownItemHoverClass: "text-primary bg-light",
                    selectedPanelClass: "form-control",
                    selectedItemClass: "pr-1 pb-1 select-list-item",
                    removeSelectedItemButtonClass: "close",
                    filterInputItemClass: "",
                    filterInputClass: "inputSearch",
                    selectedPanelFocusClass: "focus",
                  });
                }

                if (form.find(".dashboardcode-bsmultiselect").length) {
                  let select_multiselect = form
                    .find(".dashboardcode-bsmultiselect")
                    .find("ul.form-control");
                  select_multiselect
                    .find("input.inputSearch")
                    .prop("readonly", true);
                }
              }
            }

            if (
              ajaxViews[i]["view_name"] == "apigee_api_catalog" &&
              ajaxViews[i]["view_display_id"] == "page_1"
            ) {
              $(window)
                .on("load resize", function () {
                  let winwidth = window.innerWidth;

                  if ($(".smdp-card").length) {
                    let cards = $(".smdp-card:not(.smdp-card-gen)");
                    let card_body = cards.find(".card-body");

                    if (cards.hasClass("smdp-apis") == false) {
                      if (winwidth > 767) {
                        cards.removeAttr("style");
                        cards.equalHeights();
                      } else {
                        cards.removeAttr("style");
                      }
                    } else {
                      if (winwidth > 767) {
                        cards.removeAttr("style");
                        cards.equalHeights();
                      } else {
                        cards.removeAttr("style");
                      }
                    }
                  }
                })
                .resize();
            }
          });
        }

        if ($("article.apigee-entity--app--view-mode-full").length) {
          $dialogBox = $("div.ui-dialog");
          $dialogBox_buttonpane = $dialogBox.find(".ui-dialog-buttonpane");
          $dialogBox_close = $dialogBox.find(".ui-dialog-titlebar-close");
          $dialogBox_close.prepend(
            '<i class="fas fa-times" style="position: absolute; top: 1.5px; right: 2.5px;"></i>'
          );
          if ($dialogBox_buttonpane.length) {
            $dialogBox_buttonpane.detach();
          }
        }
      });
    },
  };
})(jQuery, Drupal, drupalSettings);
