import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSharpFilled'
      short_name='House'

      {...props}
    >
      <path d="M5 20V12H2L12 3L16 6.6V4H19V9.3L22 12H19V20H14V14H10V20ZM10 10.025H14Q14 9.225 13.4 8.712Q12.8 8.2 12 8.2Q11.2 8.2 10.6 8.712Q10 9.225 10 10.025Z"/>
    </Icon>
  );
});

IconMaterialHouseSharpFilled.displayName = 'AmauiIconMaterialHouseSharpFilled';

export default IconMaterialHouseSharpFilled;
