import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneEnabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabled'

      short_name='PhoneEnabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.05 21q-.45 0-.75-.3t-.3-.75V15.9q0-.35.225-.613.225-.262.575-.337l3.45-.7q.35-.05.713.062.362.113.587.338L10.9 17q1.9-1.15 3.475-2.725Q15.95 12.7 17 10.9l-2.4-2.45q-.225-.225-.288-.513-.062-.287-.012-.637l.65-3.5q.05-.35.325-.575Q15.55 3 15.9 3h4.05q.45 0 .75.3t.3.75q0 3.225-1.438 6.287-1.437 3.063-3.8 5.425-2.362 2.363-5.424 3.8Q7.275 21 4.05 21ZM16.3 7.35 17.95 9q.425-.975.65-1.975.225-1 .35-2.025h-2.2l-.45 2.35ZM5 18.95q1.025-.075 2.025-.35 1-.275 1.975-.7l-1.65-1.65-2.35.5v2.2Zm4-1.05ZM17.95 9Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabled.displayName = 'AmauiIconMaterialPhoneEnabled';

export default IconMaterialPhoneEnabled;
