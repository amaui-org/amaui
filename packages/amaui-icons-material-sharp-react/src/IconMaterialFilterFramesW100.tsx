import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterFramesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesW100'

      short_name='FilterFrames'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 21.25V4.55H8.8l3.2-3.2 3.2 3.2h6.15v16.7Zm.7-.7h17.3V5.25H3.35Zm3.3-3.3v-8.7h10.7v8.7Zm.7-.7v-7.3 7.3Zm0 0h9.3v-7.3h-9.3Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesW100.displayName = 'AmauiIconMaterialFilterFramesW100';

export default IconMaterialFilterFramesW100;
