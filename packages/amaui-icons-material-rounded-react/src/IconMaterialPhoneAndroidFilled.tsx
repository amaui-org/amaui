import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidFilled'

      short_name='PhoneAndroid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 20h3q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-3q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-7h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidFilled.displayName = 'AmauiIconMaterialPhoneAndroidFilled';

export default IconMaterialPhoneAndroidFilled;
