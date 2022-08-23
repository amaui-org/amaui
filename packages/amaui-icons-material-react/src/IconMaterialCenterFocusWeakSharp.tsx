import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCenterFocusWeakSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusWeakSharp'
      short_name='CenterFocusWeak'

      {...props}
    >
      <path d="M12 16Q10.35 16 9.175 14.825Q8 13.65 8 12Q8 10.35 9.175 9.175Q10.35 8 12 8Q13.65 8 14.825 9.175Q16 10.35 16 12Q16 13.65 14.825 14.825Q13.65 16 12 16ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.175 13.413 10.587Q12.825 10 12 10Q11.175 10 10.588 10.587Q10 11.175 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14ZM3 9V3H9V5H5V9ZM9 21H3V15H5V19H9ZM15 21V19H19V15H21V21ZM19 9V5H15V3H21V9Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusWeakSharp.displayName = 'AmauiIconMaterialCenterFocusWeakSharp';

export default IconMaterialCenterFocusWeakSharp;
