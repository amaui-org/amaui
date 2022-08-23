import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermMediaRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaRoundedFilled'
      short_name='PermMedia'

      {...props}
    >
      <path d="M7 17Q6.175 17 5.588 16.413Q5 15.825 5 15V4Q5 3.175 5.588 2.587Q6.175 2 7 2H11.175Q11.575 2 11.938 2.15Q12.3 2.3 12.575 2.575L14 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V15Q23 15.825 22.413 16.413Q21.825 17 21 17ZM3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V7Q1 6.575 1.288 6.287Q1.575 6 2 6Q2.425 6 2.713 6.287Q3 6.575 3 7V19Q3 19 3 19Q3 19 3 19H19Q19.425 19 19.712 19.288Q20 19.575 20 20Q20 20.425 19.712 20.712Q19.425 21 19 21ZM10.025 13H17.975Q18.3 13 18.438 12.725Q18.575 12.45 18.375 12.2L15.95 9.025Q15.8 8.825 15.55 8.825Q15.3 8.825 15.15 9.025L13.25 11.5L12.1 10Q11.95 9.8 11.7 9.8Q11.45 9.8 11.3 10L9.625 12.2Q9.425 12.45 9.562 12.725Q9.7 13 10.025 13Z"/>
    </Icon>
  );
});

IconMaterialPermMediaRoundedFilled.displayName = 'AmauiIconMaterialPermMediaRoundedFilled';

export default IconMaterialPermMediaRoundedFilled;
