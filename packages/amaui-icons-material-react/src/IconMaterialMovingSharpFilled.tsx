import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingSharpFilled'
      short_name='Moving'

      {...props}
    >
      <path d="M3.4 18 2 16.6 7.3 11.3Q8.175 10.425 9.425 10.425Q10.675 10.425 11.55 11.3L12.7 12.45Q13 12.75 13.413 12.75Q13.825 12.75 14.125 12.45L18.575 8H16V6H22V12H20V9.425L15.525 13.875Q14.65 14.75 13.4 14.75Q12.15 14.75 11.275 13.875L10.1 12.7Q9.825 12.425 9.4 12.425Q8.975 12.425 8.7 12.7Z"/>
    </Icon>
  );
});

IconMaterialMovingSharpFilled.displayName = 'AmauiIconMaterialMovingSharpFilled';

export default IconMaterialMovingSharpFilled;
