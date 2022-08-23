import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapRounded'
      short_name='Map'

      {...props}
    >
      <path d="M14.35 20.775 9 18.9 4.35 20.7Q3.85 20.9 3.425 20.587Q3 20.275 3 19.75V5.75Q3 5.425 3.188 5.175Q3.375 4.925 3.7 4.8L8.35 3.225Q8.675 3.125 9 3.112Q9.325 3.1 9.65 3.225L15 5.1L19.65 3.3Q20.15 3.1 20.575 3.412Q21 3.725 21 4.25V18.25Q21 18.575 20.812 18.825Q20.625 19.075 20.3 19.2L15.65 20.775Q15.325 20.875 15 20.887Q14.675 20.9 14.35 20.775ZM14 18.55V6.85L10 5.45V17.15ZM16 18.55 19 17.55V5.7L16 6.85ZM5 18.3 8 17.15V5.45L5 6.45ZM16 6.85V18.55ZM8 5.45V17.15Z"/>
    </Icon>
  );
});

IconMaterialMapRounded.displayName = 'AmauiIconMaterialMapRounded';

export default IconMaterialMapRounded;
