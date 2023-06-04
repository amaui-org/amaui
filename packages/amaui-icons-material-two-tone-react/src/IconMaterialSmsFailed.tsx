import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmsFailed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFailed'

      short_name='SmsFailed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 17.17L5.17 16H20V4H4v13.17zM11 6h2v4h-2V6zm0 6h2v2h-2v-2z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"/>
    </Icon>
  );
});

IconMaterialSmsFailed.displayName = 'AmauiIconMaterialSmsFailed';

export default IconMaterialSmsFailed;
