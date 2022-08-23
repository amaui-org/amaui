import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardToInboxRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxRoundedFilled'
      short_name='ForwardToInbox'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V13.8Q21.325 13.4 20.562 13.2Q19.8 13 19 13Q16.5 13 14.75 14.75Q13 16.5 13 19V20ZM12 11 5.3 6.8Q4.825 6.525 4.412 6.787Q4 7.05 4 7.525Q4 7.775 4.1 7.95Q4.2 8.125 4.4 8.25L11.475 12.675Q11.725 12.825 12 12.825Q12.275 12.825 12.525 12.675L19.6 8.25Q19.8 8.125 19.9 7.95Q20 7.775 20 7.525Q20 7.075 19.6 6.8Q19.2 6.525 18.7 6.8ZM19.175 20H16Q15.575 20 15.288 19.712Q15 19.425 15 19Q15 18.575 15.288 18.288Q15.575 18 16 18H19.175L18.275 17.1Q17.975 16.8 17.988 16.4Q18 16 18.3 15.7Q18.6 15.425 19 15.412Q19.4 15.4 19.7 15.7L22.3 18.3Q22.6 18.6 22.6 19Q22.6 19.4 22.3 19.7L19.7 22.3Q19.425 22.575 19.013 22.587Q18.6 22.6 18.3 22.3Q18.025 22.025 18.025 21.6Q18.025 21.175 18.3 20.9Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxRoundedFilled.displayName = 'AmauiIconMaterialForwardToInboxRoundedFilled';

export default IconMaterialForwardToInboxRoundedFilled;
