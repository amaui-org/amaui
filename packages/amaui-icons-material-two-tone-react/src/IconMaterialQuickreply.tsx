import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickreply = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Quickreply'

      short_name='Quickreply'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><g opacity=".3"><polygon points="4,4 4,17.17 5.17,16 15,16 15,10 20,10 20,4"/></g><path d="M5.17,16L4,17.17V4h16v6h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h9v-2H5.17z"/></g><g><polygon points="19,23 22.5,16 20.3,16 22,12 17,12 17,18 19,18"/></g></g></g>
    </Icon>
  );
});

IconMaterialQuickreply.displayName = 'AmauiIconMaterialQuickreply';

export default IconMaterialQuickreply;
