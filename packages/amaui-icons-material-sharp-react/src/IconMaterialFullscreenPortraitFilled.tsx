import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenPortraitFilled'

      short_name='FullscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h320v-480H320v480ZM800-80H160v-800h640v800Z"/>
    </Icon>
  );
});

IconMaterialFullscreenPortraitFilled.displayName = 'AmauiIconMaterialFullscreenPortraitFilled';

export default IconMaterialFullscreenPortraitFilled;
