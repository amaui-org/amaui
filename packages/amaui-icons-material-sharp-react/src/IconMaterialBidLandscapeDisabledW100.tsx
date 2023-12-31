import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBidLandscapeDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeDisabledW100'

      short_name='BidLandscapeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-832 832-92l-20 20-100-100H172v-540L72-812l20-20Zm280 340L200-320v120h484L542-342l-9 10-161-160ZM200-684v324l162-162-162-162Zm50-104h538v538l-28-28v-306L615-423l-20-20 165-183v-134H278l-28-28Zm345 345Zm-144 10Zm-89-89Zm10 30Zm145-29Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeDisabledW100.displayName = 'AmauiIconMaterialBidLandscapeDisabledW100';

export default IconMaterialBidLandscapeDisabledW100;
