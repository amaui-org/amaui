import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInputCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputCircleFilled'

      short_name='InputCircle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 416 280 616l56 56 104-103v407h80V569l104 103 56-56-200-200ZM146 796q-32-49-49-105T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 59-17 115t-49 105l-58-58q22-37 33-78t11-84q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 43 11 84t33 78l-58 58Z"/>
    </Icon>
  );
});

IconMaterialInputCircleFilled.displayName = 'AmauiIconMaterialInputCircleFilled';

export default IconMaterialInputCircleFilled;
