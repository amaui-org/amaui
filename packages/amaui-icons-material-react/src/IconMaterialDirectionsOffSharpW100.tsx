import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffSharpW100'
      short_name='DirectionsOff'

      {...props}
    >
      <path d="M21.3 22.3 15.975 16.975 12 20.95 3.05 12 7.025 8.025 2.25 3.25 2.75 2.75 21.8 21.8ZM15.5 16.5 13.55 14.55 12 16.1 11.5 15.6 13.05 14.05 11.35 12.35H7.9V11.65H10.65L7.5 8.5L4 12L12 20ZM17.875 15.075 17.4 14.6 20 12 12 4 9.4 6.6 8.925 6.125 12 3.05 20.95 12ZM15.325 12.525 15.825 12.025 11.725 7.925 11.225 8.425ZM13.4 10.6ZM11.5 12.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOffSharpW100.displayName = 'AmauiIconMaterialDirectionsOffSharpW100';

export default IconMaterialDirectionsOffSharpW100;
