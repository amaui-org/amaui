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
      <path d="M370-260h220q13 0 21.5-8.5T620-290v-380q0-13-8.5-21.5T590-700H370q-13 0-21.5 8.5T340-670v380q0 13 8.5 21.5T370-260Zm378 68q0 26-17 43t-43 17H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576Z"/>
    </Icon>
  );
});

IconMaterialFullscreenPortraitW100Filled.displayName = 'AmauiIconMaterialFullscreenPortraitW100Filled';

export default IconMaterialFullscreenPortraitW100Filled;
