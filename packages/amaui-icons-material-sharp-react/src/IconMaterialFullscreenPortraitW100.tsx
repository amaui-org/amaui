import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenPortraitW100'

      short_name='FullscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-260h280v-440H340v440Zm408 128H212v-696h536v696Zm-28-28v-640H240v640h480Zm0-640H240h480Z"/>
    </Icon>
  );
});

IconMaterialFullscreenPortraitW100.displayName = 'AmauiIconMaterialFullscreenPortraitW100';

export default IconMaterialFullscreenPortraitW100;
