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
      <rect fill="none" height="24" width="24"/><path d="M19,9h-2v6.59L5.41,4L4,5.41L15.59,17H9v2h10V9z"/>
    </Icon>
  );
});

IconMaterialSouthEast.displayName = 'AmauiIconMaterialSouthEast';

export default IconMaterialSouthEast;
