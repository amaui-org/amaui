import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopChromebookRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookRoundedFilled'
      short_name='LaptopChromebook'

      {...props}
    >
      <path d="M1 20Q0.575 20 0.288 19.712Q0 19.425 0 19Q0 18.575 0.288 18.288Q0.575 18 1 18H2V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V18H23Q23.425 18 23.712 18.288Q24 18.575 24 19Q24 19.425 23.712 19.712Q23.425 20 23 20ZM10.5 18H13.5Q13.7 18 13.85 17.85Q14 17.7 14 17.5Q14 17.3 13.85 17.15Q13.7 17 13.5 17H10.5Q10.3 17 10.15 17.15Q10 17.3 10 17.5Q10 17.7 10.15 17.85Q10.3 18 10.5 18Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebookRoundedFilled.displayName = 'AmauiIconMaterialLaptopChromebookRoundedFilled';

export default IconMaterialLaptopChromebookRoundedFilled;
