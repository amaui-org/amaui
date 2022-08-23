import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdUnitsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsSharpFilled'
      short_name='AdUnits'

      {...props}
    >
      <path d="M8 9V7H16V9ZM5 23V1H19V23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsSharpFilled.displayName = 'AmauiIconMaterialAdUnitsSharpFilled';

export default IconMaterialAdUnitsSharpFilled;
