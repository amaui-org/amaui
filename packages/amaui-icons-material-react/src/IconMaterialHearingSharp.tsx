import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHearingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingSharp'
      short_name='Hearing'

      {...props}
    >
      <path d="M17 22Q15.45 22 14.463 21.225Q13.475 20.45 12.95 18.95Q12.525 17.7 12.137 17.2Q11.75 16.7 10.35 15.6Q8.8 14.35 7.9 12.775Q7 11.2 7 9Q7 6.025 9.012 4.012Q11.025 2 14 2Q16.975 2 18.988 4.012Q21 6.025 21 9H19Q19 6.875 17.562 5.438Q16.125 4 14 4Q11.875 4 10.438 5.438Q9 6.875 9 9Q9 10.7 9.675 11.9Q10.35 13.1 11.6 14.05Q12.9 15 13.625 15.9Q14.35 16.8 14.7 17.85Q15.05 18.95 15.538 19.475Q16.025 20 17 20Q17.825 20 18.413 19.413Q19 18.825 19 18H21Q21 19.65 19.825 20.825Q18.65 22 17 22ZM6.2 16.75Q4.725 15.25 3.863 13.262Q3 11.275 3 9Q3 6.7 3.863 4.7Q4.725 2.7 6.2 1.2L7.65 2.6Q6.4 3.85 5.7 5.487Q5 7.125 5 9Q5 10.85 5.7 12.475Q6.4 14.1 7.65 15.35ZM14 11.5Q12.95 11.5 12.225 10.762Q11.5 10.025 11.5 9Q11.5 7.95 12.225 7.225Q12.95 6.5 14 6.5Q15.05 6.5 15.775 7.225Q16.5 7.95 16.5 9Q16.5 10.025 15.775 10.762Q15.05 11.5 14 11.5Z"/>
    </Icon>
  );
});

IconMaterialHearingSharp.displayName = 'AmauiIconMaterialHearingSharp';

export default IconMaterialHearingSharp;
