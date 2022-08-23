import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandslideSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideSharpW100Filled'
      short_name='Landslide'

      {...props}
    >
      <path d="M3.3 20.7V17.5L6 18.375L15.3 15.3L19.4 20.7ZM6 17.625 3.3 16.75V13.75L6 14.625L10.675 13.075L14.575 14.775ZM17.7 13 20.7 11.65V9.55L17.825 8.9L16.3 10.125V11.875ZM6 13.875 3.3 13V9.3H7.35L9.925 12.6ZM12.15 7.55 15.7 6.125V3.075L12.275 2.375L10.3 3.7V6.3Z"/>
    </Icon>
  );
});

IconMaterialLandslideSharpW100Filled.displayName = 'AmauiIconMaterialLandslideSharpW100Filled';

export default IconMaterialLandslideSharpW100Filled;
