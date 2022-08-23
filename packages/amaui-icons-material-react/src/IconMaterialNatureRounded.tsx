import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatureRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureRounded'
      short_name='Nature'

      {...props}
    >
      <path d="M6 22Q5.575 22 5.287 21.712Q5 21.425 5 21Q5 20.575 5.287 20.288Q5.575 20 6 20H11V16H9Q6.925 16 5.463 14.537Q4 13.075 4 11Q4 9.5 4.825 8.237Q5.65 6.975 7.05 6.4Q7.275 4.525 8.688 3.262Q10.1 2 12 2Q13.9 2 15.312 3.262Q16.725 4.525 16.95 6.4Q18.35 6.975 19.175 8.237Q20 9.5 20 11Q20 13.075 18.538 14.537Q17.075 16 15 16H13V20H18Q18.425 20 18.712 20.288Q19 20.575 19 21Q19 21.425 18.712 21.712Q18.425 22 18 22ZM9 14H15Q16.25 14 17.125 13.125Q18 12.25 18 11Q18 10.1 17.488 9.35Q16.975 8.6 16.15 8.25L15.1 7.8L14.95 6.65Q14.8 5.525 13.963 4.762Q13.125 4 12 4Q10.875 4 10.038 4.762Q9.2 5.525 9.05 6.65L8.9 7.8L7.85 8.25Q7.025 8.6 6.513 9.35Q6 10.1 6 11Q6 12.25 6.875 13.125Q7.75 14 9 14ZM12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialNatureRounded.displayName = 'AmauiIconMaterialNatureRounded';

export default IconMaterialNatureRounded;
