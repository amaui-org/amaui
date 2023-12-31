import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupW100Filled'

      short_name='AdGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Zm136-536h480v-80H294v80Z"/>
    </Icon>
  );
});

IconMaterialAdGroupW100Filled.displayName = 'AmauiIconMaterialAdGroupW100Filled';

export default IconMaterialAdGroupW100Filled;
