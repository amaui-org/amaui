import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlenderRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlenderRoundedW100'
      short_name='Blender'

      {...props}
    >
      <path d="M8 20.7Q7.7 20.7 7.5 20.5Q7.3 20.3 7.3 20V19Q7.3 18.05 7.788 17.188Q8.275 16.325 9.25 15.75L8.5 10.6H7.15Q6.5 10.6 6.075 10.175Q5.65 9.75 5.65 9.1V5.8Q5.65 5.15 6.075 4.725Q6.5 4.3 7.15 4.3H11.15V4.05Q11.15 3.725 11.363 3.512Q11.575 3.3 11.9 3.3H12.1Q12.425 3.3 12.638 3.512Q12.85 3.725 12.85 4.05V4.3H15.625Q15.975 4.3 16.2 4.562Q16.425 4.825 16.375 5.175L14.75 15.75Q15.725 16.325 16.212 17.188Q16.7 18.05 16.7 19V20Q16.7 20.3 16.5 20.5Q16.3 20.7 16 20.7ZM8.4 9.9 7.65 5H7.15Q6.85 5 6.6 5.25Q6.35 5.5 6.35 5.8V9.1Q6.35 9.4 6.6 9.65Q6.85 9.9 7.15 9.9ZM12 18.7Q12.3 18.7 12.5 18.5Q12.7 18.3 12.7 18Q12.7 17.7 12.5 17.5Q12.3 17.3 12 17.3Q11.7 17.3 11.5 17.5Q11.3 17.7 11.3 18Q11.3 18.3 11.5 18.5Q11.7 18.7 12 18.7ZM9.9 15.3H14.1L15.7 5H8.35ZM8 20H16V19Q16 17.75 15.125 16.875Q14.25 16 13 16H11Q9.75 16 8.875 16.875Q8 17.75 8 19ZM12 16Q12 16 12 16Q12 16 12 16Q12 16 12 16Q12 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialBlenderRoundedW100.displayName = 'AmauiIconMaterialBlenderRoundedW100';

export default IconMaterialBlenderRoundedW100;
