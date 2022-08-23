import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEnhancedEncryptionRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnhancedEncryptionRoundedFilled'
      short_name='EnhancedEncryption'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V10Q4 9.175 4.588 8.587Q5.175 8 6 8H7V6Q7 3.925 8.463 2.462Q9.925 1 12 1Q14.075 1 15.538 2.462Q17 3.925 17 6V8H18Q18.825 8 19.413 8.587Q20 9.175 20 10V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM9 8H15V6Q15 4.75 14.125 3.875Q13.25 3 12 3Q10.75 3 9.875 3.875Q9 4.75 9 6ZM12 19Q12.425 19 12.713 18.712Q13 18.425 13 18V16H15Q15.425 16 15.713 15.712Q16 15.425 16 15Q16 14.575 15.713 14.287Q15.425 14 15 14H13V12Q13 11.575 12.713 11.287Q12.425 11 12 11Q11.575 11 11.288 11.287Q11 11.575 11 12V14H9Q8.575 14 8.288 14.287Q8 14.575 8 15Q8 15.425 8.288 15.712Q8.575 16 9 16H11V18Q11 18.425 11.288 18.712Q11.575 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialEnhancedEncryptionRoundedFilled.displayName = 'AmauiIconMaterialEnhancedEncryptionRoundedFilled';

export default IconMaterialEnhancedEncryptionRoundedFilled;
