import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSystemUpdateAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateAltFilled'

      short_name='SystemUpdateAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h7v2H4v12h16V6h-5V4h7v16Zm10-4.6-5-5L8.4 9l2.6 2.6V4h2v7.6L15.6 9l1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateAltFilled.displayName = 'AmauiIconMaterialSystemUpdateAltFilled';

export default IconMaterialSystemUpdateAltFilled;
