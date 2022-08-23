import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrivacyTipSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyTipSharpW100Filled'
      short_name='PrivacyTip'

      {...props}
    >
      <path d="M11.65 16H12.35V10.45H11.65ZM12 9Q12.225 9 12.363 8.85Q12.5 8.7 12.5 8.5Q12.5 8.275 12.363 8.137Q12.225 8 12 8Q11.8 8 11.65 8.137Q11.5 8.275 11.5 8.5Q11.5 8.7 11.65 8.85Q11.8 9 12 9ZM12 20.65Q9.125 19.75 7.213 17.1Q5.3 14.45 5.3 11.1V5.9L12 3.4L18.7 5.9V11.1Q18.7 14.45 16.788 17.1Q14.875 19.75 12 20.65Z"/>
    </Icon>
  );
});

IconMaterialPrivacyTipSharpW100Filled.displayName = 'AmauiIconMaterialPrivacyTipSharpW100Filled';

export default IconMaterialPrivacyTipSharpW100Filled;
