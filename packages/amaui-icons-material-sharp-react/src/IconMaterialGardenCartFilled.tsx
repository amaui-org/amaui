import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGardenCartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GardenCartFilled'

      short_name='GardenCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.825 21H5V9.4L3.175 5H1V3h3.525l1.65 4h16.4L19 14.025q1.275.2 2.138 1.175.862.975.862 2.3 0 1.45-1.012 2.475Q19.975 21 18.525 21q-1.475 0-2.487-1.025-1.013-1.025-1.013-2.475 0-.5.125-.925.125-.425.35-.825l-3.275-.3ZM7 13.7v5.275l2.975-3.725-2.425-.225ZM18.5 19q.65 0 1.075-.438Q20 18.125 20 17.5q0-.65-.425-1.075Q19.15 16 18.5 16q-.625 0-1.062.425Q17 16.85 17 17.5q0 .625.438 1.062.437.438 1.062.438Z"/>
    </Icon>
  );
});

IconMaterialGardenCartFilled.displayName = 'AmauiIconMaterialGardenCartFilled';

export default IconMaterialGardenCartFilled;
