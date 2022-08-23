import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubscriptSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptSharpFilled'
      short_name='Subscript'

      {...props}
    >
      <path d="M19 20V17H22V16H19V15H23V18H20V19H23V20ZM5.875 18 10.5 10.725 6.2 4H8.85L11.95 9H12.05L15.125 4H17.8L13.475 10.725L18.125 18H15.45L12.05 12.575H11.95L8.55 18Z"/>
    </Icon>
  );
});

IconMaterialSubscriptSharpFilled.displayName = 'AmauiIconMaterialSubscriptSharpFilled';

export default IconMaterialSubscriptSharpFilled;
