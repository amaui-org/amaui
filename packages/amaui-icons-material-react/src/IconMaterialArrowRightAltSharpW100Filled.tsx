import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightAltSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltSharpW100Filled'
      short_name='ArrowRightAlt'

      {...props}
    >
      <path d="M14.125 17.1 13.625 16.6 17.875 12.35H4.775V11.65H17.875L13.625 7.4L14.125 6.9L19.225 12Z"/>
    </Icon>
  );
});

IconMaterialArrowRightAltSharpW100Filled.displayName = 'AmauiIconMaterialArrowRightAltSharpW100Filled';

export default IconMaterialArrowRightAltSharpW100Filled;
