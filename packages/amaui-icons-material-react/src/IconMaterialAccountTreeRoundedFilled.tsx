import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountTreeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeRoundedFilled'
      short_name='AccountTree'

      {...props}
    >
      <path d="M17 21Q16.175 21 15.588 20.413Q15 19.825 15 19V18H13Q12.175 18 11.588 17.413Q11 16.825 11 16V8H9V9Q9 9.825 8.412 10.412Q7.825 11 7 11H4Q3.175 11 2.588 10.412Q2 9.825 2 9V5Q2 4.175 2.588 3.587Q3.175 3 4 3H7Q7.825 3 8.412 3.587Q9 4.175 9 5V6H15V5Q15 4.175 15.588 3.587Q16.175 3 17 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V9Q22 9.825 21.413 10.412Q20.825 11 20 11H17Q16.175 11 15.588 10.412Q15 9.825 15 9V8H13V16H15V15Q15 14.175 15.588 13.587Q16.175 13 17 13H20Q20.825 13 21.413 13.587Q22 14.175 22 15V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeRoundedFilled.displayName = 'AmauiIconMaterialAccountTreeRoundedFilled';

export default IconMaterialAccountTreeRoundedFilled;
