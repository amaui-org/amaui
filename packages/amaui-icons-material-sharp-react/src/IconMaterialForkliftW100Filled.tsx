import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForkliftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkliftW100Filled'

      short_name='Forklift'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.25 20.35q-.975 0-1.662-.687Q2.9 18.975 2.9 18q0-.575.263-1.075.262-.5.737-.85V11.65h2.375V6.3H11.8l4.25 9.925q.125.3.213.612.087.313.087.663 0 1.2-.825 2.025t-2.025.825q-.95 0-1.7-.55t-1.025-1.45h-3.2q-.125.875-.788 1.438-.662.562-1.537.562Zm12.1-1V4.65h.7v14h3.05v.7Zm-12.1.3q.675 0 1.163-.487Q6.9 18.675 6.9 18t-.487-1.163q-.488-.487-1.163-.487t-1.162.487Q3.6 17.325 3.6 18t.488 1.163q.487.487 1.162.487Zm8.25 0q.875 0 1.512-.638.638-.637.638-1.512t-.638-1.512q-.637-.638-1.512-.638t-1.512.638q-.638.637-.638 1.512t.638 1.512q.637.638 1.512.638Zm-3.6-5h3.6q.325 0 .638.075.312.075.612.225L11.35 7H6.975v4.65Z"/>
    </Icon>
  );
});

IconMaterialForkliftW100Filled.displayName = 'AmauiIconMaterialForkliftW100Filled';

export default IconMaterialForkliftW100Filled;
