import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeRepairServiceRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceRoundedFilled'
      short_name='HomeRepairService'

      {...props}
    >
      <path d="M2 10Q2 9.175 2.588 8.587Q3.175 8 4 8H7V6Q7 5.175 7.588 4.588Q8.175 4 9 4H15Q15.825 4 16.413 4.588Q17 5.175 17 6V8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V14H18V13Q18 12.575 17.712 12.287Q17.425 12 17 12Q16.575 12 16.288 12.287Q16 12.575 16 13V14H8V13Q8 12.575 7.713 12.287Q7.425 12 7 12Q6.575 12 6.287 12.287Q6 12.575 6 13V14H2ZM9 8H15V6Q15 6 15 6Q15 6 15 6H9Q9 6 9 6Q9 6 9 6ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V15H6Q6 15.425 6.287 15.712Q6.575 16 7 16Q7.425 16 7.713 15.712Q8 15.425 8 15H16Q16 15.425 16.288 15.712Q16.575 16 17 16Q17.425 16 17.712 15.712Q18 15.425 18 15H22V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceRoundedFilled.displayName = 'AmauiIconMaterialHomeRepairServiceRoundedFilled';

export default IconMaterialHomeRepairServiceRoundedFilled;
