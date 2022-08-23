import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdUnitsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsRoundedW100'
      short_name='AdUnits'

      {...props}
    >
      <path d="M9 7.7Q8.85 7.7 8.75 7.6Q8.65 7.5 8.65 7.35Q8.65 7.2 8.75 7.1Q8.85 7 9 7H15Q15.15 7 15.25 7.1Q15.35 7.2 15.35 7.35Q15.35 7.5 15.25 7.6Q15.15 7.7 15 7.7ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7ZM7 18.65H17V5.35H7ZM7 19.35V20.2Q7 20.55 7.225 20.775Q7.45 21 7.8 21H16.2Q16.55 21 16.775 20.775Q17 20.55 17 20.2V19.35ZM7 4.65H17V3.8Q17 3.45 16.775 3.225Q16.55 3 16.2 3H7.8Q7.45 3 7.225 3.225Q7 3.45 7 3.8ZM7 3Q7 3 7 3.225Q7 3.45 7 3.8V4.65V3.8Q7 3.45 7 3.225Q7 3 7 3ZM7 21Q7 21 7 20.775Q7 20.55 7 20.2V19.35V20.2Q7 20.55 7 20.775Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsRoundedW100.displayName = 'AmauiIconMaterialAdUnitsRoundedW100';

export default IconMaterialAdUnitsRoundedW100;
