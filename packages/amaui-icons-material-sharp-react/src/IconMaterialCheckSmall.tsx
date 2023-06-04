import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmall'

      short_name='CheckSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 16.4-4-4L7.4 11l2.6 2.6L16.6 7 18 8.4Z"/>
    </Icon>
  );
});

IconMaterialCheckSmall.displayName = 'AmauiIconMaterialCheckSmall';

export default IconMaterialCheckSmall;
