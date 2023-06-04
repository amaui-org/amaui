import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterFrames = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFrames'

      short_name='FilterFrames'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V4h6l4-4 4 4h6v18Zm2-2h16V6H4Zm2-2V8h12v10Zm2-2v-6 6Zm0 0h8v-6H8Z"/>
    </Icon>
  );
});

IconMaterialFilterFrames.displayName = 'AmauiIconMaterialFilterFrames';

export default IconMaterialFilterFrames;
