import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks6RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6RoundedFilled'
      short_name='Looks6'

      {...props}
    >
      <path d="M11 11V9Q11 9 11 9Q11 9 11 9H13.025Q13.45 9 13.725 8.712Q14 8.425 14 8Q14 7.575 13.713 7.287Q13.425 7 13 7H11Q10.175 7 9.588 7.587Q9 8.175 9 9V15Q9 15.825 9.588 16.413Q10.175 17 11 17H13Q13.825 17 14.413 16.413Q15 15.825 15 15V13Q15 12.175 14.413 11.587Q13.825 11 13 11ZM11 13H13Q13 13 13 13Q13 13 13 13V15Q13 15 13 15Q13 15 13 15H11Q11 15 11 15Q11 15 11 15ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialLooks6RoundedFilled.displayName = 'AmauiIconMaterialLooks6RoundedFilled';

export default IconMaterialLooks6RoundedFilled;
