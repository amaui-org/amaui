import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCellWifiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellWifiFilled'

      short_name='CellWifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22 22 5.95V22Zm12-2h2v-9.2l-2 2ZM7.85 9.8l-1.3-1.3q.95-.95 2.1-1.4 1.15-.45 2.4-.45t2.4.45q1.15.45 2.1 1.4l-1.3 1.3q-.675-.675-1.5-1.013-.825-.337-1.7-.337t-1.7.337q-.825.338-1.5 1.013ZM5.3 7.2 4 5.95q1.475-1.475 3.3-2.213Q9.125 3 11.05 3t3.775.737q1.85.738 3.325 2.213l-1.3 1.25q-1.2-1.2-2.713-1.775-1.512-.575-3.087-.575-1.575 0-3.063.575Q6.5 6 5.3 7.2Zm5.75 5.8-1.925-1.925q.4-.4.9-.613.5-.212 1.025-.212.525 0 1.012.2.488.2.913.625Z"/>
    </Icon>
  );
});

IconMaterialCellWifiFilled.displayName = 'AmauiIconMaterialCellWifiFilled';

export default IconMaterialCellWifiFilled;
