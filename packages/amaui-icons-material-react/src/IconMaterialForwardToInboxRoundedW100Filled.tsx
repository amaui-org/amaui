import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardToInboxRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxRoundedW100Filled'
      short_name='ForwardToInbox'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V14.125Q20.125 13.85 19.663 13.75Q19.2 13.65 18.575 13.65Q16.525 13.65 15.088 15.087Q13.65 16.525 13.65 18.575V18.7ZM12 11 4.675 6.2Q4.575 6.1 4.425 6.125Q4.275 6.15 4.2 6.275Q4.125 6.4 4.15 6.55Q4.175 6.7 4.3 6.775L11.6 11.55Q11.8 11.675 12 11.675Q12.2 11.675 12.4 11.55L19.7 6.775Q19.825 6.7 19.85 6.55Q19.875 6.4 19.8 6.275Q19.725 6.15 19.588 6.125Q19.45 6.1 19.325 6.175ZM20.225 18.7H15.5Q15.35 18.7 15.25 18.6Q15.15 18.5 15.15 18.35Q15.15 18.2 15.25 18.1Q15.35 18 15.5 18H20.25L18.25 16Q18.15 15.9 18.138 15.75Q18.125 15.6 18.25 15.5Q18.35 15.4 18.5 15.4Q18.65 15.4 18.75 15.5L21.05 17.825Q21.275 18.05 21.275 18.35Q21.275 18.65 21.05 18.875L18.75 21.2Q18.65 21.3 18.5 21.288Q18.35 21.275 18.25 21.175Q18.15 21.075 18.15 20.938Q18.15 20.8 18.25 20.7Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxRoundedW100Filled.displayName = 'AmauiIconMaterialForwardToInboxRoundedW100Filled';

export default IconMaterialForwardToInboxRoundedW100Filled;
