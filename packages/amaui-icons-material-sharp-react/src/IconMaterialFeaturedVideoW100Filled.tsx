import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoW100Filled'

      short_name='FeaturedVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 13.35h7.7v-5.7h-7.7ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoW100Filled.displayName = 'AmauiIconMaterialFeaturedVideoW100Filled';

export default IconMaterialFeaturedVideoW100Filled;
