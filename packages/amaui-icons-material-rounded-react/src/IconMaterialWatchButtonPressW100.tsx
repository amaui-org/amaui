import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchButtonPressW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchButtonPressW100'

      short_name='WatchButtonPress'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M757.965 575Q752 575 748 570.975T744 561V284q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v277q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM357 882q-9.792 0-17.89-5.982Q331.013 870.035 328 860l-24-86q-51-27-83.5-80T188 576q0-65 32.5-118t83.5-80l24-86q3.013-10.035 11.11-16.018Q347.208 270 357 270h118q9.792 0 17.89 5.982Q500.987 281.965 504 292l24 86q51 27 83.5 80T644 576q0 65-32.5 118T528 774l-24 86q-3.013 10.035-11.11 16.018Q484.792 882 475 882H357Zm59-106q83 0 141.5-58.5T616 576q0-83-58.5-141.5T416 376q-83 0-141.5 58.5T216 576q0 83 58.5 141.5T416 776Zm-78-414q21-7 39.83-10.5Q396.661 348 416 348q19.339 0 38.17 3.5Q473 355 494 362l-18-64H356l-18 64Zm18 492h120l18-64q-21 7-39.83 10-18.831 3-38.17 3-19.339 0-38.17-3Q359 797 338 790l18 64Zm-18-556h156-156Zm18 556h-18 156-138Z"/>
    </Icon>
  );
});

IconMaterialWatchButtonPressW100.displayName = 'AmauiIconMaterialWatchButtonPressW100';

export default IconMaterialWatchButtonPressW100;
