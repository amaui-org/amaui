import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoBackpackRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackRoundedFilled'
      short_name='NoBackpack'

      {...props}
    >
      <path d="M16.5 13.675 20 17.175V8Q20 6.6 19.15 5.55Q18.3 4.5 17 4.15V3.5Q17 2.875 16.562 2.438Q16.125 2 15.5 2Q14.875 2 14.438 2.438Q14 2.875 14 3.5V4H10V3.5Q10 2.875 9.562 2.438Q9.125 2 8.5 2Q7.875 2 7.438 2.438Q7 2.875 7 3.5V4.15Q7 4.15 6.988 4.15Q6.975 4.15 6.975 4.15L14.825 12H15.5Q15.925 12 16.212 12.287Q16.5 12.575 16.5 13ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8Q4 7.725 4.037 7.475Q4.075 7.225 4.15 6.975L2.1 4.925Q1.825 4.65 1.825 4.237Q1.825 3.825 2.1 3.525Q2.4 3.225 2.812 3.225Q3.225 3.225 3.525 3.525L20.475 20.5Q20.75 20.775 20.763 21.188Q20.775 21.6 20.475 21.9Q20.2 22.175 19.775 22.175Q19.35 22.175 19.075 21.9L18.925 21.75Q18.725 21.875 18.5 21.938Q18.275 22 18 22ZM9.175 12H8.5Q8.075 12 7.788 12.287Q7.5 12.575 7.5 13Q7.5 13.425 7.788 13.712Q8.075 14 8.5 14H11.175Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackRoundedFilled.displayName = 'AmauiIconMaterialNoBackpackRoundedFilled';

export default IconMaterialNoBackpackRoundedFilled;
