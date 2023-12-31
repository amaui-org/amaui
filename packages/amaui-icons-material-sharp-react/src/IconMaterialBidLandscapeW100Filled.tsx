import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBidLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeW100Filled'

      short_name='BidLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm588-454L532-372 372-532 200-360v40l172-172 160 160 228-252v-42Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeW100Filled.displayName = 'AmauiIconMaterialBidLandscapeW100Filled';

export default IconMaterialBidLandscapeW100Filled;
