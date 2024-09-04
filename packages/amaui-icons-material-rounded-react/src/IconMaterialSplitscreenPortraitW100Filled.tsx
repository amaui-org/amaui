import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenPortraitW100Filled'

      short_name='SplitscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M370-260h220q12.75 0 21.38-8.63Q620-277.25 620-290v-110q0-12.75-8.62-21.38Q602.75-430 590-430H370q-12.75 0-21.37 8.62Q340-412.75 340-400v110q0 12.75 8.63 21.37Q357.25-260 370-260Zm0-270h220q12.75 0 21.38-8.63Q620-547.25 620-560v-110q0-12.75-8.62-21.38Q602.75-700 590-700H370q-12.75 0-21.37 8.62Q340-682.75 340-670v110q0 12.75 8.63 21.37Q357.25-530 370-530Zm378 338q0 26-17 43t-43 17H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenPortraitW100Filled.displayName = 'AmauiIconMaterialSplitscreenPortraitW100Filled';

export default IconMaterialSplitscreenPortraitW100Filled;
