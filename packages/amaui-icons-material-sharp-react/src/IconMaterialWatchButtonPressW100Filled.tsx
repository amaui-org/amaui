import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchButtonPressW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchButtonPressW100Filled'

      short_name='WatchButtonPress'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M715 575V270h28v305h-28ZM305 882l-30-108q-51-27-83.5-80T159 576q0-65 32.5-118t83.5-80l30-108h164l30 108q51 27 83.5 80T615 576q0 65-32.5 118T499 774l-30 108H305Zm82-106q83 0 141.5-58.5T587 576q0-83-58.5-141.5T387 376q-83 0-141.5 58.5T187 576q0 83 58.5 141.5T387 776Z"/>
    </Icon>
  );
});

IconMaterialWatchButtonPressW100Filled.displayName = 'AmauiIconMaterialWatchButtonPressW100Filled';

export default IconMaterialWatchButtonPressW100Filled;
