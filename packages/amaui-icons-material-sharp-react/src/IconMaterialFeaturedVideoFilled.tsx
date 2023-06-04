import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeaturedVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedVideoFilled'

      short_name='FeaturedVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 14h9V7H5Zm-3 6V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialFeaturedVideoFilled.displayName = 'AmauiIconMaterialFeaturedVideoFilled';

export default IconMaterialFeaturedVideoFilled;
