import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestDetectTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDetectTwoTone'
      short_name='NestDetect'

      {...props}
    >
      <path d="M9.5 22Q8.05 22 7.025 20.975Q6 19.95 6 18.5V4Q6 3.175 6.588 2.587Q7.175 2 8 2H11Q11.825 2 12.413 2.587Q13 3.175 13 4V18.5Q13 19.95 11.975 20.975Q10.95 22 9.5 22ZM8 15.35Q8.35 15.175 8.713 15.087Q9.075 15 9.5 15Q9.925 15 10.288 15.087Q10.65 15.175 11 15.35V4Q11 4 11 4Q11 4 11 4H8Q8 4 8 4Q8 4 8 4ZM9.5 20Q10.125 20 10.562 19.562Q11 19.125 11 18.5Q11 17.875 10.562 17.438Q10.125 17 9.5 17Q8.875 17 8.438 17.438Q8 17.875 8 18.5Q8 19.125 8.438 19.562Q8.875 20 9.5 20ZM17 18Q16.175 18 15.588 17.413Q15 16.825 15 16V8Q15 7.175 15.588 6.588Q16.175 6 17 6H18Q18.825 6 19.413 6.588Q20 7.175 20 8V16Q20 16.825 19.413 17.413Q18.825 18 18 18ZM17 16H18Q18 16 18 16Q18 16 18 16V8Q18 8 18 8Q18 8 18 8H17Q17 8 17 8Q17 8 17 8V16Q17 16 17 16Q17 16 17 16Z"/>
    </Icon>
  );
});

IconMaterialNestDetectTwoTone.displayName = 'AmauiIconMaterialNestDetectTwoTone';

export default IconMaterialNestDetectTwoTone;
