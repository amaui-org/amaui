import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthEastRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthEastRounded'
      short_name='NorthEast'

      {...props}
    >
      <path d="M4.7 19.3Q4.425 19.025 4.425 18.6Q4.425 18.175 4.7 17.9L15.6 7H10Q9.575 7 9.288 6.713Q9 6.425 9 6Q9 5.575 9.288 5.287Q9.575 5 10 5H18Q18.425 5 18.712 5.287Q19 5.575 19 6V14Q19 14.425 18.712 14.712Q18.425 15 18 15Q17.575 15 17.288 14.712Q17 14.425 17 14V8.4L6.1 19.3Q5.825 19.575 5.4 19.575Q4.975 19.575 4.7 19.3Z"/>
    </Icon>
  );
});

IconMaterialNorthEastRounded.displayName = 'AmauiIconMaterialNorthEastRounded';

export default IconMaterialNorthEastRounded;
