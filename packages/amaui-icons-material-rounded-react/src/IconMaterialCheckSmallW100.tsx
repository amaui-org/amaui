import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallW100'

      short_name='CheckSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 14.525 6.35-6.375q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25l-6.325 6.3q-.225.225-.525.225-.3 0-.525-.225l-2.325-2.3q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1Z"/>
    </Icon>
  );
});

IconMaterialCheckSmallW100.displayName = 'AmauiIconMaterialCheckSmallW100';

export default IconMaterialCheckSmallW100;
