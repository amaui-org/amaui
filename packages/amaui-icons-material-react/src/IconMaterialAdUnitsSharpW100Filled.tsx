import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdUnitsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsSharpW100Filled'
      short_name='AdUnits'

      {...props}
    >
      <path d="M8.65 7.7V7H15.35V7.7ZM6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  )
});

export default IconMaterialAdUnitsSharpW100Filled;
