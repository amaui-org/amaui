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
      <path d="M360-240h240q17 0 28.5-11.5T640-280v-400q0-17-11.5-28.5T600-720H360q-17 0-28.5 11.5T320-680v400q0 17 11.5 28.5T360-240Zm440 80q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Z"/>
    </Icon>
  );
});

IconMaterialFullscreenPortraitFilled.displayName = 'AmauiIconMaterialFullscreenPortraitFilled';

export default IconMaterialFullscreenPortraitFilled;
