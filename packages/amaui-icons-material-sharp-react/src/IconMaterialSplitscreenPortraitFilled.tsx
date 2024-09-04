import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenPortraitFilled'

      short_name='SplitscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h320v-200H320v200Zm0-280h320v-200H320v200ZM160-80v-800h640v800H160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenPortraitFilled.displayName = 'AmauiIconMaterialSplitscreenPortraitFilled';

export default IconMaterialSplitscreenPortraitFilled;
