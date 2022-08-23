import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbShadeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeSharpFilled'
      short_name='WbShade'

      {...props}
    >
      <path d="M19.5 20 14 14.5V12L22 20ZM14 20V17L17 20ZM4 20V10H2L8 4L14 10H12V20ZM7 14H9V10H7Z"/>
    </Icon>
  );
});

IconMaterialWbShadeSharpFilled.displayName = 'AmauiIconMaterialWbShadeSharpFilled';

export default IconMaterialWbShadeSharpFilled;
