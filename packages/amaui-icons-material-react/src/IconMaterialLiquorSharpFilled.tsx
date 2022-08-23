import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiquorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiquorSharpFilled'
      short_name='Liquor'

      {...props}
    >
      <path d="M3 22V20H5V16.8Q4.125 16.5 3.562 15.738Q3 14.975 3 14V6H9V14Q9 14.975 8.438 15.738Q7.875 16.5 7 16.8V20H9V22ZM5 11H7V8H5ZM11 22V9.05L14 7.95V2H19V7.95L22 9.05V22ZM16 5H17V4H16ZM13 12H20V10.45L17 9.35V7H16V9.35L13 10.45ZM13 20H20V18H13Z"/>
    </Icon>
  );
});

IconMaterialLiquorSharpFilled.displayName = 'AmauiIconMaterialLiquorSharpFilled';

export default IconMaterialLiquorSharpFilled;
