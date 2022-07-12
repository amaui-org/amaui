import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeskSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskSharpW700Filled'
      short_name='Desk'

      {...props}
    >
      <path d="M1.25 18.7V5.25H22.775V18.7H19.625V17.2H16.4V18.7H13.25V8.4H4.4V18.7ZM16.4 9.9H19.625V8.4H16.4ZM16.4 14.3H19.625V12.8H16.4Z"/>
    </Icon>
  )
});

export default IconMaterialDeskSharpW700Filled;
