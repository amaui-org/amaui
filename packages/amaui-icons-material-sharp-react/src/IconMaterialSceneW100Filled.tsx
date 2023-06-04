import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSceneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SceneW100Filled'

      short_name='Scene'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.65 21.35V7q0-1.1-.775-1.875Q19.1 4.35 18 4.35h-1.65v1.3q0 .3-.2.5t-.5.2H11.7q-.425 0-.587-.338-.163-.337-.013-.687l1.425-3.1q.15-.325.363-.45.212-.125.612-.125h2.15q.3 0 .5.2t.2.5v1.3H18q1.4 0 2.375.975.975.975.975 2.375v14.35ZM5 21.35q-1 0-1.675-.675T2.65 19v-2.15q0-.725.388-1.112.387-.388 1.112-.388.725 0 1.113.388.387.387.387 1.112v1.5h8.7v-1.5q0-.725.388-1.112.387-.388 1.112-.388.725 0 1.112.388.388.387.388 1.112V19q0 1-.675 1.675T15 21.35Zm1.35-3.7V16.5q0-.65-.462-1.175-.463-.525-1.238-.675v-2.5q0-.625.438-1.063.437-.437 1.062-.437h7.7q.625 0 1.063.437.437.438.437 1.063v2.5q-.775.175-1.237.687-.463.513-.463 1.163v1.15Z"/>
    </Icon>
  );
});

IconMaterialSceneW100Filled.displayName = 'AmauiIconMaterialSceneW100Filled';

export default IconMaterialSceneW100Filled;
