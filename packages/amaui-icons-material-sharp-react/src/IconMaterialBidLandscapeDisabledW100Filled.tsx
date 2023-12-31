import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBidLandscapeDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeDisabledW100Filled'

      short_name='BidLandscapeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M812-72 712-172H172v-540L72-812l20-20L832-92l-20 20Zm-24-178L615-423l145-161v-42L595-443 250-788h538v538Zm-588-70 172-172 160 160 9-11-179-179-162 162v40Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeDisabledW100Filled.displayName = 'AmauiIconMaterialBidLandscapeDisabledW100Filled';

export default IconMaterialBidLandscapeDisabledW100Filled;
