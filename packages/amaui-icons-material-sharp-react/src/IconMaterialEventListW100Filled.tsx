import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventListW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventListW100Filled'

      short_name='EventList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M592-172v-236h236v236H592ZM132-276v-28h320v28H132Zm460-276v-236h236v236H592ZM132-656v-28h320v28H132Z"/>
    </Icon>
  );
});

IconMaterialEventListW100Filled.displayName = 'AmauiIconMaterialEventListW100Filled';

export default IconMaterialEventListW100Filled;
