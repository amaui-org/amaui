import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoSharp'
      short_name='FeaturedVideo'

      {...props}
    >
      <path d="M5 14H14V7H5ZM2 20V4H22V20ZM4 18V6ZM4 6V18H20V6Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoSharp.displayName = 'AmauiIconMaterialFeaturedVideoSharp';

export default IconMaterialFeaturedVideoSharp;
