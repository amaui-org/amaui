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
      <path d="M4.05 21q-.25 0-.525-.012-.275-.013-.525-.038V15.1l5-1 2.9 2.9q1.9-1.15 3.488-2.725 1.587-1.575 2.637-3.375l-2.85-2.875L15.1 3h5.85q.05.25.05.525v.525q0 3.225-1.438 6.287-1.437 3.063-3.8 5.438-2.362 2.375-5.424 3.8Q7.275 21 4.05 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledFilled.displayName = 'AmauiIconMaterialPhoneEnabledFilled';

export default IconMaterialPhoneEnabledFilled;
