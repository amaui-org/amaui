import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandslideSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideSharpW100'
      short_name='Landslide'

      {...props}
    >
      <path d="M3.3 20.7H19.4L15.05 14.975L10.1 12.825L7.35 9.3H3.3ZM4 20V17.725L6 18.375L14.575 15.525L18 20ZM6 17.625 4 16.975V13.975L6 14.625L9.675 13.4L13.6 15.1ZM17.7 13 20.7 11.65V9.55L17.825 8.9L16.3 10.125V11.875ZM6 13.875 4 13.225V10H7L9.2 12.825ZM17.8 12.175 17 11.55V10.45L18 9.65L20 10.1V11.2ZM12.15 7.55 15.7 6.125V3.075L12.275 2.375L10.3 3.7V6.3ZM12.225 6.75 11 5.925V4.075L12.425 3.125L15 3.65V5.65Z"/>
    </Icon>
  );
});

IconMaterialLandslideSharpW100.displayName = 'AmauiIconMaterialLandslideSharpW100';

export default IconMaterialLandslideSharpW100;
