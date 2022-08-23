import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoPhotographyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographyRoundedFilled'
      short_name='NoPhotography'

      {...props}
    >
      <path d="M19.775 22.575 18.175 21H4Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.55 2.175 6.162Q2.35 5.775 2.675 5.5L1.375 4.2Q1.075 3.9 1.075 3.487Q1.075 3.075 1.375 2.775Q1.675 2.475 2.087 2.475Q2.5 2.475 2.8 2.775L21.2 21.175Q21.5 21.475 21.5 21.875Q21.5 22.275 21.2 22.575Q20.9 22.875 20.488 22.875Q20.075 22.875 19.775 22.575ZM22 19.125 16.475 13.575Q16.5 13.425 16.5 13.287Q16.5 13.15 16.5 13Q16.5 11.125 15.188 9.812Q13.875 8.5 12 8.5Q11.85 8.5 11.7 8.5Q11.55 8.5 11.4 8.525L7.5 4.625L8.4 3.65Q8.675 3.35 9.062 3.175Q9.45 3 9.875 3H14.125Q14.55 3 14.938 3.175Q15.325 3.35 15.6 3.65L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7ZM12 17.5Q12.575 17.5 13.125 17.375Q13.675 17.25 14.15 16.975L8.025 10.85Q7.75 11.325 7.625 11.875Q7.5 12.425 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographyRoundedFilled.displayName = 'AmauiIconMaterialNoPhotographyRoundedFilled';

export default IconMaterialNoPhotographyRoundedFilled;
