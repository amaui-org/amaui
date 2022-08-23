import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageRoundedFilled'
      short_name='Garage'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM9 14Q8.575 14 8.288 13.712Q8 13.425 8 13Q8 12.575 8.288 12.287Q8.575 12 9 12Q9.425 12 9.713 12.287Q10 12.575 10 13Q10 13.425 9.713 13.712Q9.425 14 9 14ZM15 14Q14.575 14 14.288 13.712Q14 13.425 14 13Q14 12.575 14.288 12.287Q14.575 12 15 12Q15.425 12 15.713 12.287Q16 12.575 16 13Q16 13.425 15.713 13.712Q15.425 14 15 14ZM5 11.1V17.7Q5 18.05 5.225 18.275Q5.45 18.5 5.8 18.5H6.2Q6.55 18.5 6.775 18.275Q7 18.05 7 17.7V16.5H17V17.7Q17 18.05 17.225 18.275Q17.45 18.5 17.8 18.5H18.2Q18.55 18.5 18.775 18.275Q19 18.05 19 17.7V11.1L17.35 6.3Q17.225 5.95 16.938 5.725Q16.65 5.5 16.3 5.5H7.7Q7.35 5.5 7.062 5.725Q6.775 5.95 6.65 6.3ZM7.65 9.5 8.35 7.5H15.65L16.35 9.5Z"/>
    </Icon>
  );
});

IconMaterialGarageRoundedFilled.displayName = 'AmauiIconMaterialGarageRoundedFilled';

export default IconMaterialGarageRoundedFilled;
