import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrivacyTipSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyTipSharp'
      short_name='PrivacyTip'

      {...props}
    >
      <path d="M11 17H13V11H11ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22ZM12 19.9Q14.6 19.075 16.3 16.6Q18 14.125 18 11.1V6.375L12 4.125L6 6.375V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialPrivacyTipSharp.displayName = 'AmauiIconMaterialPrivacyTipSharp';

export default IconMaterialPrivacyTipSharp;
