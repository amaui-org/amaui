import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedSharpFilled'
      short_name='Bed'

      {...props}
    >
      <path d="M2 19V10.8H3V5H21V10.8H22V19H20V17H4V19ZM13 10H19V7H13ZM5 10H11V7H5Z"/>
    </Icon>
  )
});

export default IconMaterialBedSharpFilled;
