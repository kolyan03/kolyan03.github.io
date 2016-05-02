


			$(document).ready(function() {
				$('input:checkbox.jquery-checkbox:not([safari])').checkbox({cls:'jquery-checkbox'});
				$('input[safari]:checkbox').checkbox({cls:'jquery-safari-checkbox'});
				//$('input:radio').checkbox({cls:'jquery-checkbox'});
			});

			displayForm = function (elementId)
			{
				var content = [];
				$('#' + elementId + ' input').each(function(){
					var el = $(this);
				
					if ( (el.attr('type').toLowerCase() == 'radio'))
					{
						if ( this.checked )
							content.push([
								'"', el.attr('name'), '": ',
								'value="', ( this.value ), '"',
								( this.disabled ? ', disabled' : '' )
								
							].join(''));
					}
					else
						content.push([
							'"', el.attr('name'), '": ',
							( this.checked ? 'checked' : 'not checked' ), 
							( this.disabled ? ', disabled' : '' )
						].join(''));
				});
				alert(content.join('\n'));
			}
			/*
			changeStyle = function(skin)
			{
				jQuery('.column column1 :checkbox').checkbox((skin ? {cls: skin} : {}));
			}
			*/
		