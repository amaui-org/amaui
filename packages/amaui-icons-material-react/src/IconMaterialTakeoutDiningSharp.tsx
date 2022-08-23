import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTakeoutDiningSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningSharp'
      short_name='TakeoutDining'

      {...props}
    >
      <path d="M7.8 18H16.25L16.725 11H7.3ZM7.15 9H16.875L16.95 7.75L14.15 5H9.85L7.05 7.75ZM5.25 10.7 2 7.45 3.4 6.05 5 7.65 4.95 7.05 9 3H15L19.05 7.05L19 7.65L20.6 6.05L22 7.45L18.75 10.7ZM5.95 20 5.25 10.7H18.75L18.05 20ZM12 9ZM12.025 11Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningSharp.displayName = 'AmauiIconMaterialTakeoutDiningSharp';

export default IconMaterialTakeoutDiningSharp;
