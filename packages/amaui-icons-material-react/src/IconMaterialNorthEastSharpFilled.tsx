import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthEastSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthEastSharpFilled'
      short_name='NorthEast'

      {...props}
    >
      <path d="M5.4 20 4 18.6 15.6 7H9V5H19V15H17V8.4Z"/>
    </Icon>
  );
});

IconMaterialNorthEastSharpFilled.displayName = 'AmauiIconMaterialNorthEastSharpFilled';

export default IconMaterialNorthEastSharpFilled;
