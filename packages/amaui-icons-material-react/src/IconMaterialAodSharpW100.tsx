import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodSharpW100'
      short_name='Aod'

      {...props}
    >
      <path d="M8.4 11.1V10.4H15.6V11.1ZM9.4 14.1V13.4H14.6V14.1ZM6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7ZM7 21H17V19.35H7ZM7 4.65H17V3H7ZM7 4.65V3V4.65ZM7 21V19.35V21Z"/>
    </Icon>
  );
});

export default IconMaterialAodSharpW100;
