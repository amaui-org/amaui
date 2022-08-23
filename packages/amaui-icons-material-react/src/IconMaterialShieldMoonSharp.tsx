import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldMoonSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldMoonSharp'
      short_name='ShieldMoon'

      {...props}
    >
      <path d="M12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 19.9Q14.6 19.075 16.3 16.6Q18 14.125 18 11.1V6.375L12 4.125L6 6.375V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9ZM12.525 16Q13.475 16 14.388 15.6Q15.3 15.2 15.975 14.4Q16.15 14.2 16.05 13.95Q15.95 13.7 15.7 13.65Q14.75 13.5 13.9 12.938Q13.05 12.375 12.525 11.45Q12 10.55 11.925 9.537Q11.85 8.525 12.2 7.6Q12.3 7.35 12.138 7.15Q11.975 6.95 11.7 7Q9.975 7.325 8.975 8.625Q7.975 9.925 7.975 11.5Q7.975 13.375 9.312 14.688Q10.65 16 12.525 16Z"/>
    </Icon>
  );
});

IconMaterialShieldMoonSharp.displayName = 'AmauiIconMaterialShieldMoonSharp';

export default IconMaterialShieldMoonSharp;
