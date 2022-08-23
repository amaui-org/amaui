import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardToInboxRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxRounded'
      short_name='ForwardToInbox'

      {...props}
    >
      <path d="M20 6H4V18Q4 18 4 18Q4 18 4 18H13V19V20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V13Q21.525 13 21.025 13Q20.525 13 20 13ZM19.175 20H16Q15.575 20 15.288 19.712Q15 19.425 15 19Q15 18.575 15.288 18.288Q15.575 18 16 18H19.175L18.275 17.1Q17.975 16.8 17.988 16.4Q18 16 18.3 15.7Q18.6 15.425 19 15.412Q19.4 15.4 19.7 15.7L22.3 18.3Q22.6 18.6 22.6 19Q22.6 19.4 22.3 19.7L19.7 22.3Q19.425 22.575 19.013 22.587Q18.6 22.6 18.3 22.3Q18.025 22.025 18.025 21.6Q18.025 21.175 18.3 20.9ZM4 6V18Q4 18 4 18Q4 18 4 18Q4 17.125 4 16.238Q4 15.35 4 14.625Q4 13.9 4 13.45Q4 13 4 13Q4 13 4 13.012Q4 13.025 4 13.075V6ZM12 11 20 6Q20 6 20 6Q20 6 20 6V8Q20 8 20 8Q20 8 20 8L12.525 12.675Q12.275 12.825 12 12.825Q11.725 12.825 11.475 12.675L4 8Q4 8 4 8Q4 8 4 8V6Q4 6 4 6Q4 6 4 6Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxRounded.displayName = 'AmauiIconMaterialForwardToInboxRounded';

export default IconMaterialForwardToInboxRounded;
