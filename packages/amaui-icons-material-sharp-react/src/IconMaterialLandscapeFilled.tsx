import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeFilled'

      short_name='Landscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m1 18 6-8 4.5 6h2.525l-3.775-5L14 6l9 12Z"/>
    </Icon>
  );
});

IconMaterialLandscapeFilled.displayName = 'AmauiIconMaterialLandscapeFilled';

export default IconMaterialLandscapeFilled;
