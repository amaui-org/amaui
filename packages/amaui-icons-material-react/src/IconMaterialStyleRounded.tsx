import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStyleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleRounded'
      short_name='Style'

      {...props}
    >
      <path d="M3.975 19.8 3.125 19.45Q2.35 19.125 2.088 18.325Q1.825 17.525 2.175 16.75L3.975 12.85ZM7.975 22Q7.15 22 6.562 21.413Q5.975 20.825 5.975 20V14L8.625 21.35Q8.7 21.525 8.775 21.688Q8.85 21.85 8.975 22ZM13.125 21.9Q12.325 22.2 11.575 21.825Q10.825 21.45 10.525 20.65L6.075 8.45Q5.775 7.65 6.125 6.887Q6.475 6.125 7.275 5.85L14.825 3.1Q15.625 2.8 16.375 3.175Q17.125 3.55 17.425 4.35L21.875 16.55Q22.175 17.35 21.825 18.113Q21.475 18.875 20.675 19.15ZM10.975 10Q11.4 10 11.688 9.712Q11.975 9.425 11.975 9Q11.975 8.575 11.688 8.287Q11.4 8 10.975 8Q10.55 8 10.263 8.287Q9.975 8.575 9.975 9Q9.975 9.425 10.263 9.712Q10.55 10 10.975 10ZM12.425 20 19.975 17.25 15.525 5 7.975 7.75ZM7.975 7.75 15.525 5Z"/>
    </Icon>
  );
});

IconMaterialStyleRounded.displayName = 'AmauiIconMaterialStyleRounded';

export default IconMaterialStyleRounded;
