import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStoreRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreRoundedFilled'
      short_name='Store'

      {...props}
    >
      <path d="M5 6Q4.575 6 4.287 5.713Q4 5.425 4 5Q4 4.575 4.287 4.287Q4.575 4 5 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5Q20 5.425 19.712 5.713Q19.425 6 19 6ZM5 20Q4.575 20 4.287 19.712Q4 19.425 4 19V14H3.825Q3.35 14 3.05 13.637Q2.75 13.275 2.85 12.8L3.85 7.8Q3.925 7.45 4.2 7.225Q4.475 7 4.825 7H19.175Q19.525 7 19.8 7.225Q20.075 7.45 20.15 7.8L21.15 12.8Q21.25 13.275 20.95 13.637Q20.65 14 20.175 14H20V19Q20 19.425 19.712 19.712Q19.425 20 19 20Q18.575 20 18.288 19.712Q18 19.425 18 19V14H14V19Q14 19.425 13.713 19.712Q13.425 20 13 20ZM6 18H12V14H6Z"/>
    </Icon>
  );
});

IconMaterialStoreRoundedFilled.displayName = 'AmauiIconMaterialStoreRoundedFilled';

export default IconMaterialStoreRoundedFilled;
