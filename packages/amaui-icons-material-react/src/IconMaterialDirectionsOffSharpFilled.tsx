import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffSharpFilled'
      short_name='DirectionsOff'

      {...props}
    >
      <path d="M20.475 23.3 16 18.8 12 22.8 1.2 12 5.2 8 0.675 3.5 2.1 2.075 21.9 21.875ZM12 17 13.1 15.9 11.675 14.5 10.6 15.6ZM18.85 15.95 15.95 13.05 17 12 12 7 10.95 8.05 8.05 5.15 12 1.2 22.8 12ZM7 13H10.175L8.175 11H7Z"/>
    </Icon>
  );
});

export default IconMaterialDirectionsOffSharpFilled;
