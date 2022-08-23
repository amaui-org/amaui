import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipToFrontSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFrontSharpFilled'
      short_name='FlipToFront'

      {...props}
    >
      <path d="M3 13V11H5V13ZM3 17V15H5V17ZM3 21V19H5V21ZM3 9V7H5V9ZM15 21V19H17V21ZM7 17V3H21V17ZM9 15H19V5H9ZM11 21V19H13V21ZM7 21V19H9V21Z"/>
    </Icon>
  );
});

IconMaterialFlipToFrontSharpFilled.displayName = 'AmauiIconMaterialFlipToFrontSharpFilled';

export default IconMaterialFlipToFrontSharpFilled;
