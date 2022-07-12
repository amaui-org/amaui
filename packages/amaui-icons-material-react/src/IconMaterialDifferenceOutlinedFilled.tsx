import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDifferenceOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceOutlinedFilled'
      short_name='Difference'

      {...props}
    >
      <path d="M12.5 11H14.5V9H16.5V7H14.5V5H12.5V7H10.5V9H12.5ZM10.5 15H16.5V13H10.5ZM8 19Q7.175 19 6.588 18.413Q6 17.825 6 17V3Q6 2.175 6.588 1.587Q7.175 1 8 1H15L21 7V17Q21 17.825 20.413 18.413Q19.825 19 19 19ZM4 23Q3.175 23 2.588 22.413Q2 21.825 2 21V7H4V21Q4 21 4 21Q4 21 4 21H15V23Z"/>
    </Icon>
  )
});

export default IconMaterialDifferenceOutlinedFilled;
