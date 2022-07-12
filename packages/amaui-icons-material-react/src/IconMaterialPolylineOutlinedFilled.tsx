import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolylineOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineOutlinedFilled'
      short_name='Polyline'

      {...props}
    >
      <path d="M15 22V19.5L8 16H3V10H7.3L10 6.9V2H16V8H11.7L9 11.1V14.25L15 17.25V16H21V22Z"/>
    </Icon>
  )
});

export default IconMaterialPolylineOutlinedFilled;
