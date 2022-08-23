import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardRoundedFilled'
      short_name='SdCard'

      {...props}
    >
      <path d="M10 11Q10.425 11 10.713 10.712Q11 10.425 11 10V8Q11 7.575 10.713 7.287Q10.425 7 10 7Q9.575 7 9.288 7.287Q9 7.575 9 8V10Q9 10.425 9.288 10.712Q9.575 11 10 11ZM13 11Q13.425 11 13.713 10.712Q14 10.425 14 10V8Q14 7.575 13.713 7.287Q13.425 7 13 7Q12.575 7 12.288 7.287Q12 7.575 12 8V10Q12 10.425 12.288 10.712Q12.575 11 13 11ZM16 11Q16.425 11 16.712 10.712Q17 10.425 17 10V8Q17 7.575 16.712 7.287Q16.425 7 16 7Q15.575 7 15.288 7.287Q15 7.575 15 8V10Q15 10.425 15.288 10.712Q15.575 11 16 11ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8.825Q4 8.425 4.15 8.062Q4.3 7.7 4.575 7.425L9.425 2.575Q9.7 2.3 10.062 2.15Q10.425 2 10.825 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialSdCardRoundedFilled.displayName = 'AmauiIconMaterialSdCardRoundedFilled';

export default IconMaterialSdCardRoundedFilled;
