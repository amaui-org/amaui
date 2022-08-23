import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsCarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsCarSharpW100'
      short_name='DirectionsCar'

      {...props}
    >
      <path d="M5 17.7V19.7H4.3V12.2L6.375 6.3H17.625L19.7 12.2V19.7H19V17.7ZM5.3 11.5H18.7L17.1 7H6.9ZM5 12.2V17ZM7.4 15.6Q7.825 15.6 8.113 15.312Q8.4 15.025 8.4 14.6Q8.4 14.175 8.113 13.887Q7.825 13.6 7.4 13.6Q6.975 13.6 6.688 13.887Q6.4 14.175 6.4 14.6Q6.4 15.025 6.688 15.312Q6.975 15.6 7.4 15.6ZM16.6 15.6Q17.025 15.6 17.312 15.312Q17.6 15.025 17.6 14.6Q17.6 14.175 17.312 13.887Q17.025 13.6 16.6 13.6Q16.175 13.6 15.888 13.887Q15.6 14.175 15.6 14.6Q15.6 15.025 15.888 15.312Q16.175 15.6 16.6 15.6ZM5 17H19V12.2H5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsCarSharpW100.displayName = 'AmauiIconMaterialDirectionsCarSharpW100';

export default IconMaterialDirectionsCarSharpW100;
