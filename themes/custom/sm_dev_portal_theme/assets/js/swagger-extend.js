/**
 * Custom js scripts for swagger ui formatter
 *
*/

(function($) {
	var iv = null;

	if(iv !== null) {
		window.clearTimeout(iv);
	}

	iv = setTimeout(function() {
		if ($('div.api-documentation').find('.smdp-swagger-wrapper').length) {
			var smdp_api_sidebar = $('div.api-documentation').find('aside.api-sidebar');
			var smdp_swagger_wrapper = $('div.api-documentation').find('.smdp-swagger-wrapper');
			var smdp_swagger_ui_main = smdp_swagger_wrapper.find('section.swagger-ui.swagger-container');
			var smdp_swagger_ui = smdp_swagger_wrapper.find('.swagger-ui');
			var smdp_swagger_information_container = smdp_swagger_ui_main.find('.information-container');
			var smdp_swagger_scheme_container = smdp_swagger_ui_main.find('.scheme-container');
			var smdp_swagger_inner_wrapper = smdp_swagger_ui_main.find('.wrapper');
			var smdp_block_desktop = smdp_swagger_inner_wrapper.find('section.block-desktop');
			var smdp_opblock_tag_section = smdp_block_desktop.find('.opblock-tag-section');
			var smdp_opblock_tab_section_parent = smdp_opblock_tag_section.parent();
		}

		if (smdp_swagger_information_container.length) {
			smdp_swagger_information_container.addClass('position-relative');

			if (smdp_swagger_information_container.find('.block').hasClass('col-12') == true) {
				smdp_swagger_information_container.find('.block.col-12').removeClass('col-12');

				if (smdp_swagger_information_container.find('.info').find('.info__tos').length)
					smdp_swagger_information_container.find('.info').find('.info__tos').detach();

				if (smdp_swagger_information_container.find('.info').find('.info__contact').length)
					smdp_swagger_information_container.find('.info').find('.info__contact').detach();

				if (smdp_swagger_information_container.find('.info').find('.info__license').length)
					smdp_swagger_information_container.find('.info').find('.info__license').detach();

				if (smdp_swagger_information_container.find('.info').find('.info__extdocs').length)
					smdp_swagger_information_container.find('.info').find('.info__extdocs').detach();

				if (smdp_swagger_information_container.find('.info').find('hgroup.main > a').length) {
					smdp_swagger_information_container.find('.info').find('hgroup.main > a').text('Download Source');
					smdp_swagger_information_container.find('.info').find('hgroup.main > a').addClass('visible btn btn-outline-primary btn-squared rounded-sm')
				}
			}
		}

		if (smdp_swagger_scheme_container.length) {
			if (smdp_swagger_scheme_container.find('.block').hasClass('col-12') == true)
				smdp_swagger_scheme_container.find('.block.col-12').removeClass('col-12');
		}

		if (smdp_swagger_inner_wrapper.length) {
			if (smdp_swagger_inner_wrapper.find('.block').hasClass('col-12') == true)
				smdp_swagger_inner_wrapper.find('.block.col-12').removeClass('col-12');
		}

		//building tabdiv
		smdp_opblock_tab_section_parent.parent().addClass('tab-content').attr('id','v-pills-tabContent');

		$.each(smdp_opblock_tag_section, function(key, value) {
			let $this = $(this);
			let header = $this.find('h4');
			let data_tag = header.data('tag');
			let parent_span = $this.parent();

			//add attributes to parent span
			parent_span.addClass('tab-pane fade');
			parent_span.attr('role','tabpanel');
			parent_span.attr('id','v-pills-'+data_tag);
			parent_span.attr('aria-labelledby','v-pills-'+data_tag+'-tab')

			let pills_item = '<a class="nav-link rounded-0 border-bottom" id="v-pills-'+data_tag+'-tab" data-toggle="pill" href="#v-pills-'+data_tag+'" role="tab" aria-controls="v-pills-'+data_tag+'" aria-selected="false">'+data_tag+'</a>';
			smdp_api_sidebar.append($.trim(pills_item));

			if (key == 0) {
				parent_span.addClass('show active');
				smdp_api_sidebar.find('a').addClass('active border-top').attr('aria-selected','true');
			}
		});

		$(window).on('resize', function() {
			let winwidth = window.innerWidth;

			if (winwidth < 992) {
				smdp_opblock_tab_section_parent.parent().removeClass('tab-content');
			} else {
				smdp_opblock_tab_section_parent.parent().addClass('tab-content');
			}
		}).resize();

		$('#v-pills-tab a').on('click', function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
	}, 1500);
})(jQuery);
