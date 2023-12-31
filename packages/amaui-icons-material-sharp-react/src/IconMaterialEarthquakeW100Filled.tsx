import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEarthquakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarthquakeW100Filled'

      short_name='Earthquake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M357-132 256-466H132v-28h145l90 292 140-626h20l104 443 80-258h20l57 149h39v28h-60l-44-120-84 269h-21L517-751 379-132h-22Z"/>
    </Icon>
  );
});

IconMaterialEarthquakeW100Filled.displayName = 'AmauiIconMaterialEarthquakeW100Filled';

export default IconMaterialEarthquakeW100Filled;
