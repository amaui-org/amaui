import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoSharpFilled'
      short_name='FeaturedVideo'

      {...props}
    >
      <path d="M5 14H14V7H5ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoSharpFilled.displayName = 'AmauiIconMaterialFeaturedVideoSharpFilled';

export default IconMaterialFeaturedVideoSharpFilled;
