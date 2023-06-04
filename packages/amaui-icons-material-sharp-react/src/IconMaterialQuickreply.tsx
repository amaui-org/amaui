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
      <path d="M2 22V2h20v8h-2V4H4v12h11v2H6Zm2-6V4Zm15 7v-5h-2v-6h5l-1.7 4h2.2Z"/>
    </Icon>
  );
});

IconMaterialQuickreply.displayName = 'AmauiIconMaterialQuickreply';

export default IconMaterialQuickreply;
