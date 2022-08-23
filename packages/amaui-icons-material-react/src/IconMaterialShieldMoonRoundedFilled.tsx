import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldMoonRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldMoonRoundedFilled'
      short_name='ShieldMoon'

      {...props}
    >
      <path d="M12.525 16Q13.475 16 14.388 15.6Q15.3 15.2 15.975 14.4Q16.15 14.2 16.05 13.95Q15.95 13.7 15.7 13.65Q14.75 13.5 13.9 12.938Q13.05 12.375 12.525 11.45Q12 10.55 11.925 9.537Q11.85 8.525 12.2 7.6Q12.3 7.35 12.138 7.15Q11.975 6.95 11.7 7Q9.975 7.325 8.975 8.625Q7.975 9.925 7.975 11.5Q7.975 13.375 9.312 14.688Q10.65 16 12.525 16ZM12 21.925Q11.875 21.925 11.75 21.925Q11.625 21.925 11.525 21.875Q8.25 20.85 6.125 17.812Q4 14.775 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.775 17.875 17.812Q15.75 20.85 12.475 21.875Q12.35 21.925 12 21.925Z"/>
    </Icon>
  );
});

IconMaterialShieldMoonRoundedFilled.displayName = 'AmauiIconMaterialShieldMoonRoundedFilled';

export default IconMaterialShieldMoonRoundedFilled;
