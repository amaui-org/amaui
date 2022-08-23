import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffSharpFilled'
      short_name='EditOff'

      {...props}
    >
      <path d="M19.8 22.6 12.725 15.525 7.25 21H3V16.75L8.475 11.275L1.4 4.2L2.825 2.775L21.225 21.175ZM15.575 12.675 11.325 8.425 13.6 6.15 17.85 10.4ZM19.3 8.925 15.05 4.725 17.875 1.9 22.1 6.125Z"/>
    </Icon>
  );
});

IconMaterialEditOffSharpFilled.displayName = 'AmauiIconMaterialEditOffSharpFilled';

export default IconMaterialEditOffSharpFilled;
