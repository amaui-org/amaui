import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormsAddOnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormsAddOnSharpFilled'
      short_name='FormsAddOn'

      {...props}
    >
      <path d="M19 6H7V4H19ZM7 10V8H19V10ZM7 14V12H13.65Q13.075 12.4 12.613 12.9Q12.15 13.4 11.8 14ZM7 16H11.075Q11.025 16.25 11.012 16.488Q11 16.725 11 16.975Q11 17.25 11.025 17.5Q11.05 17.75 11.1 18H7ZM16 20.975V17.975H13V15.975H16V12.975H18V15.975H21V17.975H18V20.975ZM5 6H3V4H5ZM3 10V8H5V10ZM3 14V12H5V14ZM3 16H5V18H3Z"/>
    </Icon>
  );
});

IconMaterialFormsAddOnSharpFilled.displayName = 'AmauiIconMaterialFormsAddOnSharpFilled';

export default IconMaterialFormsAddOnSharpFilled;
