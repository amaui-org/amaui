import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneDisabledRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledRoundedFilled'
      short_name='PhoneDisabled'

      {...props}
    >
      <path d="M17.05 14.3 15.65 12.9Q15.925 12.6 16.4 11.863Q16.875 11.125 17 10.9L14.55 8.4Q14.35 8.2 14.275 7.962Q14.2 7.725 14.25 7.5L14.95 3.8Q15.025 3.45 15.288 3.225Q15.55 3 15.9 3H20Q20.45 3 20.725 3.3Q21 3.6 21 4.05Q21 6.8 19.95 9.412Q18.9 12.025 17.05 14.3ZM3.95 21Q3.35 21 3.175 20.725Q3 20.45 3 20V15.9Q3 15.55 3.225 15.287Q3.45 15.025 3.8 14.95L7.45 14.2Q7.725 14.15 7.963 14.225Q8.2 14.3 8.4 14.5L10.9 17Q11.4 16.7 11.875 16.387Q12.35 16.075 12.8 15.7L2.1 5Q1.825 4.725 1.825 4.3Q1.825 3.875 2.1 3.6Q2.375 3.325 2.8 3.325Q3.225 3.325 3.5 3.6L20.5 20.6Q20.775 20.875 20.775 21.3Q20.775 21.725 20.5 22Q20.225 22.275 19.8 22.275Q19.375 22.275 19.1 22L14.25 17.15Q12.025 18.95 9.363 19.975Q6.7 21 3.95 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledRoundedFilled.displayName = 'AmauiIconMaterialPhoneDisabledRoundedFilled';

export default IconMaterialPhoneDisabledRoundedFilled;
