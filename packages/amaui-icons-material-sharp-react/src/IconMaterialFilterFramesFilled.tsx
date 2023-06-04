import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterFramesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesFilled'

      short_name='FilterFrames'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V4h6l4-4 4 4h6v18Zm2-2h16V6H4Zm2-2V8h12v10Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesFilled.displayName = 'AmauiIconMaterialFilterFramesFilled';

export default IconMaterialFilterFramesFilled;
