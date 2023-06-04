import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneEnabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledW100'

      short_name='PhoneEnabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.375 19.55q-.225 0-.512-.012-.288-.013-.513-.063v-3.9l3.35-.7 2.55 2.675q2.35-1.3 4.075-3t3.125-4.05L14.8 8.075l.825-3.775h3.95q.05.25.063.525.012.275.012.525 0 2.425-1.312 4.962-1.313 2.538-3.388 4.601-2.075 2.062-4.6 3.362-2.525 1.3-4.975 1.275ZM17.8 9.85q.5-1.1.863-2.375.362-1.275.262-2.475H16.2l-.625 2.85Zm-8.2 8-2.15-2.2-2.4.475v2.7q.975.125 2.325-.2T9.6 17.85Zm8.2-8Zm-8.2 8Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledW100.displayName = 'AmauiIconMaterialPhoneEnabledW100';

export default IconMaterialPhoneEnabledW100;
