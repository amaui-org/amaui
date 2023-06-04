import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodWatchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodWatchW100'

      short_name='AodWatch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M376 556v-28h208v28H376Zm40 88v-28h128v28H416Zm-18 238-30-108q-51-27-83.5-80T252 576q0-65 32.5-118t83.5-80l30-108h164l30 108q51 27 83.5 80T708 576q0 65-32.5 118T592 774l-30 108H398Zm82-106q83 0 141.5-58.5T680 576q0-83-58.5-141.5T480 376q-83 0-141.5 58.5T280 576q0 83 58.5 141.5T480 776Zm-78-414q21-7 40-10.5t38-3.5q19 0 38 3.5t40 10.5l-18-64H420l-18 64Zm18 492h120l18-64q-21 7-40 10t-38 3q-19 0-38-3t-40-10l18 64Zm-18-556h156-156Zm18 556h-18 156-138Z"/>
    </Icon>
  );
});

IconMaterialAodWatchW100.displayName = 'AmauiIconMaterialAodWatchW100';

export default IconMaterialAodWatchW100;
