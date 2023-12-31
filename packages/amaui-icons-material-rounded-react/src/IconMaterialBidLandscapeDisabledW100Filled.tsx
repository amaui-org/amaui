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
      <path d="M712-172H232q-26 0-43-17t-17-43v-480l-90-90q-4-4-4.5-9.5T82-822q5-5 10-5t10 5l720 720q4 4 4.5 9.5T822-82q-5 5-10 5t-10-5l-90-90Zm76-78L615-423l145-161v-42L595-443 250-788h478q26 0 43 17t17 43v478Zm-588-70 172-172 150 150q4 4 9.5 4t9.5-5L362-522 200-360v40Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeDisabledW100Filled.displayName = 'AmauiIconMaterialBidLandscapeDisabledW100Filled';

export default IconMaterialBidLandscapeDisabledW100Filled;
