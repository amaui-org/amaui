import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldRounded'
      short_name='Shield'

      {...props}
    >
      <path d="M12 21.925Q11.875 21.925 11.75 21.925Q11.625 21.925 11.525 21.875Q8.25 20.85 6.125 17.812Q4 14.775 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.775 17.875 17.812Q15.75 20.85 12.475 21.875Q12.35 21.925 12 21.925ZM12 19.9Q14.6 19.075 16.3 16.6Q18 14.125 18 11.1V6.375Q18 6.375 18 6.375Q18 6.375 18 6.375L12 4.125Q12 4.125 12 4.125Q12 4.125 12 4.125L6 6.375Q6 6.375 6 6.375Q6 6.375 6 6.375V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialShieldRounded.displayName = 'AmauiIconMaterialShieldRounded';

export default IconMaterialShieldRounded;
