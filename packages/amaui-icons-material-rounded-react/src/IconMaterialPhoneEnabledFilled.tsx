import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneEnabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledFilled'

      short_name='PhoneEnabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.05 21q-.45 0-.75-.3t-.3-.75V15.9q0-.35.225-.613.225-.262.575-.337l3.45-.7q.35-.05.713.062.362.113.587.338L10.9 17q1.9-1.15 3.475-2.725Q15.95 12.7 17 10.9l-2.4-2.45q-.225-.225-.288-.513-.062-.287-.012-.637l.65-3.5q.05-.35.325-.575Q15.55 3 15.9 3h4.05q.45 0 .75.3t.3.75q0 3.225-1.438 6.287-1.437 3.063-3.8 5.425-2.362 2.363-5.424 3.8Q7.275 21 4.05 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledFilled.displayName = 'AmauiIconMaterialPhoneEnabledFilled';

export default IconMaterialPhoneEnabledFilled;
