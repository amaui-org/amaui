import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyW100'

      short_name='Nearby'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-350 350-480l130-130 130 130-130 130Zm0 209L140-481l340-340 340 340-340 340Zm0-52 288-288-287-288-288 288 287 288Z"/>
    </Icon>
  );
});

IconMaterialNearbyW100.displayName = 'AmauiIconMaterialNearbyW100';

export default IconMaterialNearbyW100;
