import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronRounded'
      short_name='Iron'

      {...props}
    >
      <path d="M3 18Q2.575 18 2.288 17.712Q2 17.425 2 17V15Q2 13.35 3.175 12.175Q4.35 11 6 11H15V10Q15 9.575 14.713 9.287Q14.425 9 14 9H10Q9.725 9 9.5 9.125Q9.275 9.25 9.15 9.475Q9 9.725 8.775 9.863Q8.55 10 8.275 10Q7.7 10 7.412 9.512Q7.125 9.025 7.35 8.6Q7.725 7.875 8.425 7.438Q9.125 7 10 7H14Q15.25 7 16.125 7.875Q17 8.75 17 10V14Q17.425 14 17.712 13.712Q18 13.425 18 13V9Q18 7.75 18.875 6.875Q19.75 6 21 6Q21.425 6 21.712 6.287Q22 6.575 22 7Q22 7.425 21.712 7.713Q21.425 8 21 8Q20.575 8 20.288 8.287Q20 8.575 20 9V13Q20 14.25 19.125 15.125Q18.25 16 17 16V17Q17 17.425 16.712 17.712Q16.425 18 16 18ZM4 16H15V13H6Q5.175 13 4.588 13.587Q4 14.175 4 15ZM15 16V15Q15 14.175 15 13.587Q15 13 15 13V16Z"/>
    </Icon>
  );
});

IconMaterialIronRounded.displayName = 'AmauiIconMaterialIronRounded';

export default IconMaterialIronRounded;
