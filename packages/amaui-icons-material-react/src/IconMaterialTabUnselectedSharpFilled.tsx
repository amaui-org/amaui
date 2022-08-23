import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabUnselectedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabUnselectedSharpFilled'
      short_name='TabUnselected'

      {...props}
    >
      <path d="M14 20V18H16V20ZM8 6V4H10V6ZM12 10V4H22V10ZM18 20V18H20V16H22V20ZM10 20V18H12V20ZM20 14V12H22V14ZM2 16V14H4V16ZM2 12V10H4V12ZM2 20V18H4V20ZM2 8V4H6V6H4V8ZM6 20V18H8V20Z"/>
    </Icon>
  );
});

IconMaterialTabUnselectedSharpFilled.displayName = 'AmauiIconMaterialTabUnselectedSharpFilled';

export default IconMaterialTabUnselectedSharpFilled;
