import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolAltSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltSharpFilled'
      short_name='PanToolAlt'

      {...props}
    >
      <path d="M10.2 21 5.075 15.625 6.275 14.375 10.075 15.25V4.5Q10.075 3.875 10.513 3.438Q10.95 3 11.575 3Q12.2 3 12.638 3.438Q13.075 3.875 13.075 4.5V10.5H14.475L20.25 13.4L19.175 21Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltSharpFilled.displayName = 'AmauiIconMaterialPanToolAltSharpFilled';

export default IconMaterialPanToolAltSharpFilled;
