import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeSharp'
      short_name='Landscape'

      {...props}
    >
      <path d="M1 18 7 10 11.5 16H19L14 9.35L11.5 12.65L10.25 11L14 6L23 18ZM14.025 16ZM5 16H9L7 13.325ZM5 16H7H9Z"/>
    </Icon>
  );
});

IconMaterialLandscapeSharp.displayName = 'AmauiIconMaterialLandscapeSharp';

export default IconMaterialLandscapeSharp;
