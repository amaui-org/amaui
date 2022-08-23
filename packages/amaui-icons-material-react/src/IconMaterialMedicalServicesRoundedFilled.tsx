import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicalServicesRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesRoundedFilled'
      short_name='MedicalServices'

      {...props}
    >
      <path d="M11 15V17Q11 17.425 11.288 17.712Q11.575 18 12 18Q12.425 18 12.713 17.712Q13 17.425 13 17V15H15Q15.425 15 15.713 14.712Q16 14.425 16 14Q16 13.575 15.713 13.287Q15.425 13 15 13H13V11Q13 10.575 12.713 10.287Q12.425 10 12 10Q11.575 10 11.288 10.287Q11 10.575 11 11V13H9Q8.575 13 8.288 13.287Q8 13.575 8 14Q8 14.425 8.288 14.712Q8.575 15 9 15ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V8Q2 7.175 2.588 6.588Q3.175 6 4 6H8V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4Z"/>
    </Icon>
  );
});

IconMaterialMedicalServicesRoundedFilled.displayName = 'AmauiIconMaterialMedicalServicesRoundedFilled';

export default IconMaterialMedicalServicesRoundedFilled;
