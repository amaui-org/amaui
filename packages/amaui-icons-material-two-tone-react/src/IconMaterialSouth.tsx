import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='South'

      short_name='South'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z"/>
    </Icon>
  );
});

IconMaterialSouth.displayName = 'AmauiIconMaterialSouth';

export default IconMaterialSouth;
