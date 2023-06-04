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
      <path d="M10 15.475 6.925 12.4l.475-.475 2.6 2.6 6.6-6.6.475.475Z"/>
    </Icon>
  );
});

IconMaterialCheckSmallW100.displayName = 'AmauiIconMaterialCheckSmallW100';

export default IconMaterialCheckSmallW100;
