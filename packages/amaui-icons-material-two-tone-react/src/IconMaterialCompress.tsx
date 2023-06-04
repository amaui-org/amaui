import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompress = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Compress'

      short_name='Compress'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="2" width="16" x="4" y="9"/><polygon points="16,4 13,4 13,1 11,1 11,4 8,4 12,8"/><polygon points="8,19 11,19 11,22 13,22 13,19 16,19 12,15"/><rect height="2" width="16" x="4" y="12"/></g></g>
    </Icon>
  );
});

IconMaterialCompress.displayName = 'AmauiIconMaterialCompress';

export default IconMaterialCompress;
