import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalTaxiSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalTaxiSharp'
      short_name='LocalTaxi'

      {...props}
    >
      <path d="M3 21V12L5.45 5H9V3H15V5H18.55L21 12V21H18V19H6V21ZM5.8 10H18.2L17.15 7H6.85ZM5 12V17ZM7.5 16Q8.125 16 8.562 15.562Q9 15.125 9 14.5Q9 13.875 8.562 13.438Q8.125 13 7.5 13Q6.875 13 6.438 13.438Q6 13.875 6 14.5Q6 15.125 6.438 15.562Q6.875 16 7.5 16ZM16.5 16Q17.125 16 17.562 15.562Q18 15.125 18 14.5Q18 13.875 17.562 13.438Q17.125 13 16.5 13Q15.875 13 15.438 13.438Q15 13.875 15 14.5Q15 15.125 15.438 15.562Q15.875 16 16.5 16ZM5 17H19V12H5Z"/>
    </Icon>
  );
});

IconMaterialLocalTaxiSharp.displayName = 'AmauiIconMaterialLocalTaxiSharp';

export default IconMaterialLocalTaxiSharp;
