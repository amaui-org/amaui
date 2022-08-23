import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderOuterTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuterTwoTone'
      short_name='BorderOuter'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 11h2v2h-2zm0-4h2v2h-2zm10-4H3v18h18V3zm-2 16H5V5h14v14zm-4-8h2v2h-2zm-8 0h2v2H7zm4 4h2v2h-2z"/>
    </Icon>
  );
});

IconMaterialBorderOuterTwoTone.displayName = 'AmauiIconMaterialBorderOuterTwoTone';

export default IconMaterialBorderOuterTwoTone;
