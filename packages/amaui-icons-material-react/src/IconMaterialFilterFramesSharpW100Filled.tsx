import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterFramesSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesSharpW100Filled'
      short_name='FilterFrames'

      {...props}
    >
      <path d="M2.65 21.25V4.55H8.8L12 1.35L15.2 4.55H21.35V21.25ZM3.35 20.55H20.65V5.25H3.35ZM6.65 17.25V8.55H17.35V17.25Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesSharpW100Filled.displayName = 'AmauiIconMaterialFilterFramesSharpW100Filled';

export default IconMaterialFilterFramesSharpW100Filled;
