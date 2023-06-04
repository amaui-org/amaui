import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterFramesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesW100Filled'

      short_name='FilterFrames'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 21.25V4.55H8.8l3.2-3.2 3.2 3.2h6.15v16.7Zm.7-.7h17.3V5.25H3.35Zm3.3-3.3v-8.7h10.7v8.7Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesW100Filled.displayName = 'AmauiIconMaterialFilterFramesW100Filled';

export default IconMaterialFilterFramesW100Filled;
