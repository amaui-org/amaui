import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKingBedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBedSharpFilled'
      short_name='KingBed'

      {...props}
    >
      <path d="M5 19H4L3.35 17H2V10H4V5H20V10H22V17H20.65L20 19H19L18.35 17H5.65ZM13 10H18V7H13ZM6 10H11V7H6Z"/>
    </Icon>
  );
});

IconMaterialKingBedSharpFilled.displayName = 'AmauiIconMaterialKingBedSharpFilled';

export default IconMaterialKingBedSharpFilled;
