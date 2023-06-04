import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoW100'

      short_name='FeaturedVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 13.35h7.7v-5.7h-7.7ZM3.3 18.7V5.3h17.4v13.4ZM4 18V6ZM4 6v12h16V6Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoW100.displayName = 'AmauiIconMaterialFeaturedVideoW100';

export default IconMaterialFeaturedVideoW100;
