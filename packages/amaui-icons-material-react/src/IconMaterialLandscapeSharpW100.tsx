import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeSharpW100'
      short_name='Landscape'

      {...props}
    >
      <path d="M3.475 16.7 7.125 11.8 10.275 16H19.125L14.125 9.35L10.975 13.55L10.525 12.95L14.125 8.15L20.525 16.7ZM12.825 16ZM4.875 16H9.4L7.125 12.95ZM4.875 16H7.125H9.4Z"/>
    </Icon>
  );
});

IconMaterialLandscapeSharpW100.displayName = 'AmauiIconMaterialLandscapeSharpW100';

export default IconMaterialLandscapeSharpW100;
