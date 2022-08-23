import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterRounded'
      short_name='Filter'

      {...props}
    >
      <path d="M10.025 14H17.975Q18.3 14 18.438 13.725Q18.575 13.45 18.375 13.2L15.95 10.025Q15.8 9.825 15.55 9.825Q15.3 9.825 15.15 10.025L13.25 12.5L12.1 11Q11.95 10.8 11.7 10.8Q11.45 10.8 11.3 11L9.625 13.2Q9.425 13.45 9.562 13.725Q9.7 14 10.025 14ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM8 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H8Q8 4 8 4Q8 4 8 4V16Q8 16 8 16Q8 16 8 16ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V7Q2 6.575 2.288 6.287Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17Q17.425 20 17.712 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22ZM8 4Q8 4 8 4Q8 4 8 4V16Q8 16 8 16Q8 16 8 16Q8 16 8 16Q8 16 8 16V4Q8 4 8 4Q8 4 8 4Z"/>
    </Icon>
  );
});

IconMaterialFilterRounded.displayName = 'AmauiIconMaterialFilterRounded';

export default IconMaterialFilterRounded;
