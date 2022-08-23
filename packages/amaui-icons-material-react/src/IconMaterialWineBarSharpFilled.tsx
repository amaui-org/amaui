import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWineBarSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarSharpFilled'
      short_name='WineBar'

      {...props}
    >
      <path d="M8 21V19H11V14.9Q8.85 14.55 7.425 12.9Q6 11.25 6 9V3H18V9Q18 11.25 16.575 12.9Q15.15 14.55 13 14.9V19H16V21ZM8 8H16V5H8Z"/>
    </Icon>
  );
});

IconMaterialWineBarSharpFilled.displayName = 'AmauiIconMaterialWineBarSharpFilled';

export default IconMaterialWineBarSharpFilled;
