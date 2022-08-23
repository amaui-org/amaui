import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneEnabledRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledRoundedFilled'
      short_name='PhoneEnabled'

      {...props}
    >
      <path d="M4.05 21Q3.6 21 3.3 20.7Q3 20.4 3 19.95V15.9Q3 15.55 3.225 15.287Q3.45 15.025 3.8 14.95L7.25 14.25Q7.6 14.2 7.963 14.312Q8.325 14.425 8.55 14.65L10.9 17Q12.8 15.85 14.375 14.275Q15.95 12.7 17 10.9L14.6 8.45Q14.375 8.225 14.312 7.937Q14.25 7.65 14.3 7.3L14.95 3.8Q15 3.45 15.275 3.225Q15.55 3 15.9 3H19.95Q20.4 3 20.7 3.3Q21 3.6 21 4.05Q21 7.275 19.562 10.337Q18.125 13.4 15.762 15.762Q13.4 18.125 10.338 19.562Q7.275 21 4.05 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledRoundedFilled.displayName = 'AmauiIconMaterialPhoneEnabledRoundedFilled';

export default IconMaterialPhoneEnabledRoundedFilled;
