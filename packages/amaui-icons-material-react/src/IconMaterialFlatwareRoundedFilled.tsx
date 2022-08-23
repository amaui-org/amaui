import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlatwareRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlatwareRoundedFilled'
      short_name='Flatware'

      {...props}
    >
      <path d="M13 21Q12.575 21 12.288 20.712Q12 20.425 12 20V10.9Q10.95 10.4 10.475 9.337Q10 8.275 10 7.1Q10 5.525 10.788 4.262Q11.575 3 13 3Q14.425 3 15.213 4.262Q16 5.525 16 7.1Q16 8.275 15.525 9.337Q15.05 10.4 14 10.9V20Q14 20.425 13.713 20.712Q13.425 21 13 21ZM18 21Q17.575 21 17.288 20.712Q17 20.425 17 20V4.25Q17 3.7 17.375 3.375Q17.75 3.05 18.225 3.2Q19.425 3.6 20.212 4.625Q21 5.65 21 7V12Q21 12.425 20.712 12.712Q20.425 13 20 13H19V20Q19 20.425 18.712 20.712Q18.425 21 18 21ZM6 21Q5.575 21 5.287 20.712Q5 20.425 5 20V11Q4.175 11 3.587 10.412Q3 9.825 3 9V3.7Q3 3.4 3.2 3.2Q3.4 3 3.7 3Q4 3 4.2 3.2Q4.4 3.4 4.4 3.7V7H5.3V3.7Q5.3 3.4 5.5 3.2Q5.7 3 6 3Q6.3 3 6.5 3.2Q6.7 3.4 6.7 3.7V7H7.6V3.7Q7.6 3.4 7.8 3.2Q8 3 8.3 3Q8.6 3 8.8 3.2Q9 3.4 9 3.7V9Q9 9.825 8.412 10.412Q7.825 11 7 11V20Q7 20.425 6.713 20.712Q6.425 21 6 21Z"/>
    </Icon>
  );
});

IconMaterialFlatwareRoundedFilled.displayName = 'AmauiIconMaterialFlatwareRoundedFilled';

export default IconMaterialFlatwareRoundedFilled;
