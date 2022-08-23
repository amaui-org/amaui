import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlagRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagRounded'
      short_name='Flag'

      {...props}
    >
      <path d="M6 21Q5.575 21 5.287 20.712Q5 20.425 5 20V5Q5 4.575 5.287 4.287Q5.575 4 6 4H13.175Q13.525 4 13.8 4.225Q14.075 4.45 14.15 4.8L14.4 6H19Q19.425 6 19.712 6.287Q20 6.575 20 7V15Q20 15.425 19.712 15.712Q19.425 16 19 16H13.825Q13.475 16 13.2 15.775Q12.925 15.55 12.85 15.2L12.6 14H7V20Q7 20.425 6.713 20.712Q6.425 21 6 21ZM12.5 10ZM14.65 14H18V8H12.75L12.35 6H7V12H14.25Z"/>
    </Icon>
  );
});

IconMaterialFlagRounded.displayName = 'AmauiIconMaterialFlagRounded';

export default IconMaterialFlagRounded;
