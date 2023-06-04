import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortraitFilled'

      short_name='FloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M640 976q-17 0-28.5-11.5T600 936V736q0-17 11.5-28.5T640 696h120q17 0 28.5 11.5T800 736v200q0 17-11.5 28.5T760 976H640Zm-400 0q-33 0-56.5-23.5T160 896V256q0-33 23.5-56.5T240 176h480q33 0 56.5 23.5T800 256v320q0 17-11.5 28.5T760 616H600q-33 0-56.5 23.5T520 696v240q0 17-11.5 28.5T480 976H240Z"/>
    </Icon>
  );
});

IconMaterialFloatPortraitFilled.displayName = 'AmauiIconMaterialFloatPortraitFilled';

export default IconMaterialFloatPortraitFilled;
