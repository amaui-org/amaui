import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightClassTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassTwoTone'
      short_name='FlightClass'

      {...props}
    >
      <rect fill="none" height="24" width="24" y="0"/><rect height="5" opacity=".3" width="2" x="14" y="6"/><path d="M16,4h-2c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2V6C18,4.9,17.1,4,16,4z M16,11h-2V6h2V11z M9.5,16H18v2H9.49 c-0.88,0-1.66-0.58-1.92-1.43L5,8V4h2v4L9.5,16z M8,19h10v2H8V19z"/>
    </Icon>
  );
});

IconMaterialFlightClassTwoTone.displayName = 'AmauiIconMaterialFlightClassTwoTone';

export default IconMaterialFlightClassTwoTone;
