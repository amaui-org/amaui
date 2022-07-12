import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewArrayOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayOutlinedW100Filled'
      short_name='ViewArray'

      {...props}
    >
      <path d="M18 17.7V6.3H19.7V17.7ZM8.3 17.7V6.3H15.7V17.7ZM4.3 17.7V6.3H6V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialViewArrayOutlinedW100Filled;
