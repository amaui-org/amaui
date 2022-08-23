import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaleRounded'
      short_name='Male'

      {...props}
    >
      <path d="M9.5 20Q7.2 20 5.6 18.4Q4 16.8 4 14.5Q4 12.2 5.6 10.6Q7.2 9 9.5 9Q10.325 9 11.125 9.238Q11.925 9.475 12.6 9.975L16.575 6H15Q14.575 6 14.288 5.713Q14 5.425 14 5Q14 4.575 14.288 4.287Q14.575 4 15 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5V9Q20 9.425 19.712 9.712Q19.425 10 19 10Q18.575 10 18.288 9.712Q18 9.425 18 9V7.425L14.025 11.375Q14.5 12.075 14.75 12.862Q15 13.65 15 14.5Q15 16.8 13.4 18.4Q11.8 20 9.5 20ZM9.5 11Q8.05 11 7.025 12.025Q6 13.05 6 14.5Q6 15.95 7.025 16.975Q8.05 18 9.5 18Q10.95 18 11.975 16.975Q13 15.95 13 14.5Q13 13.05 11.975 12.025Q10.95 11 9.5 11Z"/>
    </Icon>
  );
});

IconMaterialMaleRounded.displayName = 'AmauiIconMaterialMaleRounded';

export default IconMaterialMaleRounded;
