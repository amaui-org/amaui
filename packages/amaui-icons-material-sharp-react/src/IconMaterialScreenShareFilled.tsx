import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareFilled'

      short_name='ScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 14h2v-3h3v2l3-3-3-3v2H8Zm-6 4V3h20v15Zm-1 3v-2h22v2Z"/>
    </Icon>
  );
});

IconMaterialScreenShareFilled.displayName = 'AmauiIconMaterialScreenShareFilled';

export default IconMaterialScreenShareFilled;
