import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendToMobileRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileRoundedFilled'
      short_name='SendToMobile'

      {...props}
    >
      <path d="M16.3 15.3Q16.025 15.025 16.013 14.613Q16 14.2 16.275 13.9L17.15 13H13Q12.575 13 12.288 12.712Q12 12.425 12 12Q12 11.575 12.288 11.287Q12.575 11 13 11H17.15L16.275 10.1Q16 9.825 16 9.412Q16 9 16.3 8.7Q16.575 8.425 17 8.425Q17.425 8.425 17.7 8.7L20.3 11.3Q20.45 11.45 20.513 11.625Q20.575 11.8 20.575 12Q20.575 12.2 20.513 12.375Q20.45 12.55 20.3 12.7L17.7 15.3Q17.425 15.575 17.013 15.587Q16.6 15.6 16.3 15.3ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V7H17V6H7V18H17V17H19V21Q19 21.825 18.413 22.413Q17.825 23 17 23Z"/>
    </Icon>
  );
});

IconMaterialSendToMobileRoundedFilled.displayName = 'AmauiIconMaterialSendToMobileRoundedFilled';

export default IconMaterialSendToMobileRoundedFilled;
