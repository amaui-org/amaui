import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachMoneyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachMoneyW100Filled'

      short_name='AttachMoney'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.625 20.35v-2q-1.275-.125-2.187-.812-.913-.688-1.363-1.888l.65-.3q.45 1.1 1.213 1.7.762.6 2.087.6 1.175 0 2.188-.6 1.012-.6 1.012-1.95 0-1.125-.737-1.813Q13.75 12.6 11.875 12 10 11.4 9.213 10.65q-.788-.75-.788-2 0-1.325 1.075-2.138 1.075-.812 2.125-.862v-2h.7v2q.975.075 1.7.475.725.4 1.25 1.225l-.6.35q-.375-.6-1.025-1-.65-.4-1.625-.4-1.175 0-2.037.65-.863.65-.863 1.7 0 .95.625 1.55.625.6 2.625 1.25 1.85.6 2.7 1.45.85.85.85 2.2 0 1.425-1.062 2.3-1.063.875-2.538.95v2Z"/>
    </Icon>
  );
});

IconMaterialAttachMoneyW100Filled.displayName = 'AmauiIconMaterialAttachMoneyW100Filled';

export default IconMaterialAttachMoneyW100Filled;
