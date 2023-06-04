import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchWakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchWakeW100Filled'

      short_name='WatchWake'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M786 750v-28h28v28h-28Zm0-160v-28h68v28h-68Zm0-160v-29h108v29H786ZM305 882l-30-108q-51-27-83.5-80T159 576q0-65 32.5-118t83.5-80l30-108h164l30 108q51 27 83.5 80T615 576q0 65-32.5 118T499 774l-30 108H305Zm82-106q83 0 141.5-58.5T587 576q0-83-58.5-141.5T387 376q-83 0-141.5 58.5T187 576q0 83 58.5 141.5T387 776Z"/>
    </Icon>
  );
});

IconMaterialWatchWakeW100Filled.displayName = 'AmauiIconMaterialWatchWakeW100Filled';

export default IconMaterialWatchWakeW100Filled;
