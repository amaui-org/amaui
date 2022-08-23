import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditLocationRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationRounded'
      short_name='EditLocation'

      {...props}
    >
      <path d="M9 13.5H9.75Q9.8 13.5 10.1 13.35L13.85 9.575L12.425 8.15L8.65 11.9Q8.6 11.95 8.5 12.25V13Q8.5 13.2 8.65 13.35Q8.8 13.5 9 13.5ZM14.575 8.85 15.275 8.15Q15.4 8.025 15.4 7.887Q15.4 7.75 15.275 7.625L14.375 6.725Q14.25 6.6 14.113 6.6Q13.975 6.6 13.85 6.725L13.15 7.425ZM12 19.35Q15.05 16.55 16.525 14.262Q18 11.975 18 10.2Q18 7.475 16.262 5.737Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2Q6 11.975 7.475 14.262Q8.95 16.55 12 19.35ZM12 21.625Q11.8 21.625 11.6 21.55Q11.4 21.475 11.25 21.35Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2Q20 12.6 18.2 15.363Q16.4 18.125 12.75 21.35Q12.6 21.475 12.4 21.55Q12.2 21.625 12 21.625ZM12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Q12 10.2 12 10.2Z"/>
    </Icon>
  );
});

IconMaterialEditLocationRounded.displayName = 'AmauiIconMaterialEditLocationRounded';

export default IconMaterialEditLocationRounded;
