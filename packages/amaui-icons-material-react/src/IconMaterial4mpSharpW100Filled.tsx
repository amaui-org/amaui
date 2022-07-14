import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4mpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4mpSharpW100Filled'
      short_name='4mp'

      {...props}
    >
      <path d="M12.775 11.1H13.475V9.6H14.475V8.9H13.475V5.9H12.775V8.9H10.475V5.9H9.775V9.6H12.775ZM4.3 19.7V4.3H19.7V19.7ZM6.4 18.1H7.1V13.6H8.9V16.6H9.6V13.6H11.4V18.1H12.1V12.9H6.4ZM13.9 18.1H14.6V16.6H17.6V12.9H13.9ZM14.6 13.6H16.9V15.9H14.6Z"/>
    </Icon>
  );
});

export default IconMaterial4mpSharpW100Filled;
