import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSingleBedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedSharp'
      short_name='SingleBed'

      {...props}
    >
      <path d="M7 19H6L5.35 17H4V10H6V5H18V10H20V17H18.65L18 19H17L16.35 17H7.65ZM13 10H16V7H13ZM8 10H11V7H8ZM6 15H18V12H6ZM18 15H6Z"/>
    </Icon>
  );
});

IconMaterialSingleBedSharp.displayName = 'AmauiIconMaterialSingleBedSharp';

export default IconMaterialSingleBedSharp;
