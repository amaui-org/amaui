import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Height'

      short_name='Height'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g/><polygon points="13,6.99 16,6.99 12,3 8,6.99 11,6.99 11,17.01 8,17.01 12,21 16,17.01 13,17.01"/></g>
    </Icon>
  );
});

IconMaterialHeight.displayName = 'AmauiIconMaterialHeight';

export default IconMaterialHeight;
