import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthEast = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEast'

      short_name='SouthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19v-2h6.6L4 5.4 5.4 4 17 15.6V9h2v10Z"/>
    </Icon>
  );
});

IconMaterialSouthEast.displayName = 'AmauiIconMaterialSouthEast';

export default IconMaterialSouthEast;
