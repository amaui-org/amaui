import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPageviewRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewRounded'
      short_name='Pageview'

      {...props}
    >
      <path d="M15.625 17.025Q15.9 17.3 16.325 17.3Q16.75 17.3 17.025 17.025Q17.3 16.75 17.3 16.325Q17.3 15.9 17.025 15.625L15.3 13.9Q15.65 13.375 15.825 12.775Q16 12.175 16 11.5Q16 9.625 14.688 8.312Q13.375 7 11.5 7Q9.625 7 8.312 8.312Q7 9.625 7 11.5Q7 13.375 8.312 14.688Q9.625 16 11.5 16Q12.15 16 12.762 15.825Q13.375 15.65 13.9 15.3ZM11.5 14Q10.45 14 9.725 13.275Q9 12.55 9 11.5Q9 10.45 9.725 9.725Q10.45 9 11.5 9Q12.55 9 13.275 9.725Q14 10.45 14 11.5Q14 12.55 13.275 13.275Q12.55 14 11.5 14ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialPageviewRounded.displayName = 'AmauiIconMaterialPageviewRounded';

export default IconMaterialPageviewRounded;
