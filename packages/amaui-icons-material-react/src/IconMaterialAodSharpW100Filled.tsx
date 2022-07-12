import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodSharpW100Filled'
      short_name='Aod'

      {...props}
    >
      <path d="M8.4 11.1V10.4H15.6V11.1ZM9.4 14.1V13.4H14.6V14.1ZM6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  )
});

export default IconMaterialAodSharpW100Filled;
