import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='West'

      short_name='West'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9 19-7-7 7-7 1.425 1.4-4.6 4.6H22v2H5.825l4.575 4.6Z"/>
    </Icon>
  );
});

IconMaterialWest.displayName = 'AmauiIconMaterialWest';

export default IconMaterialWest;
