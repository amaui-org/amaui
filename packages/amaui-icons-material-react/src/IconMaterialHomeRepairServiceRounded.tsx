import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeRepairServiceRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceRounded'
      short_name='HomeRepairService'

      {...props}
    >
      <path d="M2 18V10Q2 9.175 2.588 8.587Q3.175 8 4 8H7V6Q7 5.175 7.588 4.588Q8.175 4 9 4H15Q15.825 4 16.413 4.588Q17 5.175 17 6V8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V18Q22 18.825 21.413 19.413Q20.825 20 20 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18ZM4 18H20Q20 18 20 18Q20 18 20 18V15H18Q18 15.425 17.712 15.712Q17.425 16 17 16Q16.575 16 16.288 15.712Q16 15.425 16 15H8Q8 15.425 7.713 15.712Q7.425 16 7 16Q6.575 16 6.287 15.712Q6 15.425 6 15H4V18Q4 18 4 18Q4 18 4 18ZM4 10V13H6Q6 12.575 6.287 12.287Q6.575 12 7 12Q7.425 12 7.713 12.287Q8 12.575 8 13H16Q16 12.575 16.288 12.287Q16.575 12 17 12Q17.425 12 17.712 12.287Q18 12.575 18 13H20V10Q20 10 20 10Q20 10 20 10H4Q4 10 4 10Q4 10 4 10ZM9 8H15V6Q15 6 15 6Q15 6 15 6H9Q9 6 9 6Q9 6 9 6Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceRounded.displayName = 'AmauiIconMaterialHomeRepairServiceRounded';

export default IconMaterialHomeRepairServiceRounded;
