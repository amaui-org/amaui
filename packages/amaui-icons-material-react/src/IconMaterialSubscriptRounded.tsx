import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubscriptRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptRounded'
      short_name='Subscript'

      {...props}
    >
      <path d="M20 20Q19.575 20 19.288 19.712Q19 19.425 19 19V18Q19 17.575 19.288 17.288Q19.575 17 20 17H22V16H19.5Q19.3 16 19.15 15.85Q19 15.7 19 15.5Q19 15.3 19.15 15.15Q19.3 15 19.5 15H22Q22.425 15 22.712 15.287Q23 15.575 23 16V17Q23 17.425 22.712 17.712Q22.425 18 22 18H20V19H22.5Q22.7 19 22.85 19.15Q23 19.3 23 19.5Q23 19.7 22.85 19.85Q22.7 20 22.5 20ZM10.5 10.725 7.3 5.725Q6.95 5.15 7.263 4.575Q7.575 4 8.225 4Q8.525 4 8.775 4.137Q9.025 4.275 9.175 4.525L11.95 9H12.05L14.8 4.525Q14.95 4.25 15.2 4.125Q15.45 4 15.75 4Q16.425 4 16.725 4.575Q17.025 5.15 16.675 5.725L13.475 10.725L17.025 16.25Q17.375 16.825 17.05 17.413Q16.725 18 16.075 18Q15.775 18 15.525 17.863Q15.275 17.725 15.125 17.475L12.05 12.575H11.95L8.875 17.475Q8.7 17.75 8.463 17.875Q8.225 18 7.925 18Q7.25 18 6.938 17.425Q6.625 16.85 6.975 16.275Z"/>
    </Icon>
  );
});

IconMaterialSubscriptRounded.displayName = 'AmauiIconMaterialSubscriptRounded';

export default IconMaterialSubscriptRounded;
