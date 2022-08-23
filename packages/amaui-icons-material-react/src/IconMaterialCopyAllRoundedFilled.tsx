import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCopyAllRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyAllRoundedFilled'
      short_name='CopyAll'

      {...props}
    >
      <path d="M9 18Q8.175 18 7.588 17.413Q7 16.825 7 16V4Q7 3.175 7.588 2.587Q8.175 2 9 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V16Q20 16.825 19.413 17.413Q18.825 18 18 18ZM9 16H18Q18 16 18 16Q18 16 18 16V4Q18 4 18 4Q18 4 18 4H9Q9 4 9 4Q9 4 9 4V16Q9 16 9 16Q9 16 9 16ZM3 15H5V13H3ZM3 11.5H5V9.5H3ZM10 22H12V20H10ZM3 18.5H5V16.5H3ZM5 22V20H3Q3 20.825 3.587 21.413Q4.175 22 5 22ZM6.5 22H8.5V20H6.5ZM13.5 22Q14.325 22 14.913 21.413Q15.5 20.825 15.5 20H13.5ZM3 8H5V6Q4.175 6 3.587 6.588Q3 7.175 3 8Z"/>
    </Icon>
  );
});

IconMaterialCopyAllRoundedFilled.displayName = 'AmauiIconMaterialCopyAllRoundedFilled';

export default IconMaterialCopyAllRoundedFilled;
