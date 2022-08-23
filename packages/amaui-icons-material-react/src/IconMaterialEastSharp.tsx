import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEastSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastSharp'
      short_name='East'

      {...props}
    >
      <path d="M15 19 13.6 17.6 18.2 13H2V11H18.2L13.6 6.4L15 5L22 12Z"/>
    </Icon>
  );
});

IconMaterialEastSharp.displayName = 'AmauiIconMaterialEastSharp';

export default IconMaterialEastSharp;
