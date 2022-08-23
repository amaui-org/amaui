import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartDisplaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplaySharpFilled'
      short_name='SmartDisplay'

      {...props}
    >
      <path d="M9.5 16.5 16.5 12 9.5 7.5ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplaySharpFilled.displayName = 'AmauiIconMaterialSmartDisplaySharpFilled';

export default IconMaterialSmartDisplaySharpFilled;
