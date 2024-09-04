import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenPortraitW100Filled'

      short_name='FullscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-260h280v-440H340v440Zm408 128H212v-696h536v696Z"/>
    </Icon>
  );
});

IconMaterialFullscreenPortraitW100Filled.displayName = 'AmauiIconMaterialFullscreenPortraitW100Filled';

export default IconMaterialFullscreenPortraitW100Filled;
