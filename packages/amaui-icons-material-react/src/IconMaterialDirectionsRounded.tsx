import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRounded'
      short_name='Directions'

      {...props}
    >
      <path d="M10.6 21.4 2.6 13.4Q2 12.8 2 12Q2 11.2 2.6 10.6L10.6 2.6Q11.2 2 12 2Q12.8 2 13.4 2.6L21.4 10.6Q22 11.2 22 12Q22 12.8 21.4 13.4L13.4 21.4Q12.8 22 12 22Q11.2 22 10.6 21.4ZM12 20Q12 20 12 20Q12 20 12 20L20 12Q20 12 20 12Q20 12 20 12L12 4Q12 4 12 4Q12 4 12 4L4 12Q4 12 4 12Q4 12 4 12ZM11.3 16.3Q11.575 16.575 12 16.575Q12.425 16.575 12.7 16.3L16.3 12.7Q16.45 12.55 16.512 12.375Q16.575 12.2 16.575 12Q16.575 11.8 16.512 11.625Q16.45 11.45 16.3 11.3L12.7 7.7Q12.425 7.425 12.013 7.412Q11.6 7.4 11.3 7.7Q11.025 7.975 11.012 8.387Q11 8.8 11.275 9.1L13.15 11H8Q7.575 11 7.287 11.287Q7 11.575 7 12Q7 12.425 7.287 12.712Q7.575 13 8 13H13.15L11.275 14.9Q11 15.175 11 15.587Q11 16 11.3 16.3ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRounded.displayName = 'AmauiIconMaterialDirectionsRounded';

export default IconMaterialDirectionsRounded;
