import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffW100Filled'

      short_name='NearbyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 20.475 3.5 12l3.75-3.75-3.9-3.9.5-.5L20.1 20.1l-.5.5-3.85-3.85Zm0-1.25L15.1 16.1l-2-2-1.1 1.15L8.75 12l1.1-1.15L7.9 8.9l-3.125 3.075ZM17.65 14.8l-.65-.6 2.175-2.225-7.2-7.2L9.8 6.95l-.65-.6 2.8-2.875 8.55 8.475ZM15 12.2l-3.25-3.25.25-.2L15.25 12Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffW100Filled.displayName = 'AmauiIconMaterialNearbyOffW100Filled';

export default IconMaterialNearbyOffW100Filled;
