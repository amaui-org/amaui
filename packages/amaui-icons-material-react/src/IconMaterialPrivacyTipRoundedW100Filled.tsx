import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrivacyTipRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyTipRoundedW100Filled'
      short_name='PrivacyTip'

      {...props}
    >
      <path d="M12 16Q12.15 16 12.25 15.9Q12.35 15.8 12.35 15.65V10.8Q12.35 10.65 12.25 10.55Q12.15 10.45 12 10.45Q11.85 10.45 11.75 10.55Q11.65 10.65 11.65 10.8V15.65Q11.65 15.8 11.75 15.9Q11.85 16 12 16ZM12 9Q12.225 9 12.363 8.85Q12.5 8.7 12.5 8.5Q12.5 8.275 12.363 8.137Q12.225 8 12 8Q11.8 8 11.65 8.137Q11.5 8.275 11.5 8.5Q11.5 8.7 11.65 8.85Q11.8 9 12 9ZM12 20.575Q11.875 20.575 11.788 20.575Q11.7 20.575 11.625 20.525Q8.9 19.525 7.1 16.938Q5.3 14.35 5.3 11.1V6.95Q5.3 6.475 5.575 6.087Q5.85 5.7 6.275 5.525L11.475 3.6Q11.75 3.5 12 3.5Q12.25 3.5 12.525 3.6L17.725 5.525Q18.15 5.7 18.425 6.087Q18.7 6.475 18.7 6.95V11.1Q18.7 14.35 16.9 16.938Q15.1 19.525 12.375 20.525Q12.275 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialPrivacyTipRoundedW100Filled.displayName = 'AmauiIconMaterialPrivacyTipRoundedW100Filled';

export default IconMaterialPrivacyTipRoundedW100Filled;
