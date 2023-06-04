import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffW100'

      short_name='NearbyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.975 20.475-8.5-8.5 3.45-3.45-3.9-3.9.5-.5 16.25 16.25-.5.5-3.85-3.85Zm0-1.3 2.8-2.8L12.8 14.4l-.825.825-3.25-3.25.825-.825-1.975-1.975-2.8 2.8Zm5.35-4.05-.65-.65 2.5-2.5-7.2-7.2L9.45 7.3l-.65-.65 3.175-3.175 8.5 8.5ZM14.7 12.5l-3.25-3.25.5-.5L15.2 12Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffW100.displayName = 'AmauiIconMaterialNearbyOffW100';

export default IconMaterialNearbyOffW100;
