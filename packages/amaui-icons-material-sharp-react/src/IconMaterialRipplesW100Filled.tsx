import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRipplesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RipplesW100Filled'

      short_name='Ripples'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M572-760q-12 18-19 38t-7 42q0 56 39 95t95 39q22 0 42-7t38-19v-188H572ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialRipplesW100Filled.displayName = 'AmauiIconMaterialRipplesW100Filled';

export default IconMaterialRipplesW100Filled;
