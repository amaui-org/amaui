import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSquare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Square'

      short_name='Square'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g opacity=".3"><rect height="14" width="14" x="5" y="5"/></g><g><path d="M3,3v18h18V3H3z M19,19H5V5h14V19z"/></g></g>
    </Icon>
  );
});

IconMaterialSquare.displayName = 'AmauiIconMaterialSquare';

export default IconMaterialSquare;
