import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneIphoneRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneRoundedW100Filled'
      short_name='PhoneIphone'

      {...props}
    >
      <path d="M12 19.9Q12.275 19.9 12.488 19.688Q12.7 19.475 12.7 19.2Q12.7 18.925 12.488 18.712Q12.275 18.5 12 18.5Q11.725 18.5 11.513 18.712Q11.3 18.925 11.3 19.2Q11.3 19.475 11.513 19.688Q11.725 19.9 12 19.9ZM7 16.7H17V5.35H7ZM7.8 21.7Q7.15 21.7 6.725 21.275Q6.3 20.85 6.3 20.2V3.8Q6.3 3.15 6.725 2.725Q7.15 2.3 7.8 2.3H16.2Q16.85 2.3 17.275 2.725Q17.7 3.15 17.7 3.8V20.2Q17.7 20.85 17.275 21.275Q16.85 21.7 16.2 21.7Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneRoundedW100Filled.displayName = 'AmauiIconMaterialPhoneIphoneRoundedW100Filled';

export default IconMaterialPhoneIphoneRoundedW100Filled;
