import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledW100Filled'

      short_name='PhoneDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.2 13.45-.5-.5q.425-.525.887-1.188.463-.662.813-1.262l-2.65-2.425.825-3.775h3.95q.05.25.063.5.012.25.012.55 0 2.075-.95 4.2t-2.45 3.9Zm-10.85 6.1q-.225 0-.525-.012-.3-.013-.525-.063v-3.9l3.35-.7 2.55 2.675q.95-.525 1.875-1.188Q13 15.7 13.85 14.95L3.3 4.4l.5-.5 16.4 16.4-.5.5-5.35-5.35q-2.25 2-4.525 3.05-2.275 1.05-4.475 1.05Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledW100Filled.displayName = 'AmauiIconMaterialPhoneDisabledW100Filled';

export default IconMaterialPhoneDisabledW100Filled;
