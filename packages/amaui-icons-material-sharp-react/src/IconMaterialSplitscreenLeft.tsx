import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenLeft'

      short_name='SplitscreenLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h320v720H120Zm400 0v-720h320v720H520Zm240-640H600v560h160v-560ZM600-200h160-160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLeft.displayName = 'AmauiIconMaterialSplitscreenLeft';

export default IconMaterialSplitscreenLeft;
