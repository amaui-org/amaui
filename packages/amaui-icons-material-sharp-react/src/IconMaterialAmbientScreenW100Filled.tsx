import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmbientScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmbientScreenW100Filled'

      short_name='AmbientScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 706 40-90 90-40-90-40-40-90-40 90-90 40 90 40 40 90Zm300 192-32-70-70-32 70-32 32-70 32 70 70 32-70 32-32 70Zm-648-54V308h696v292q-12-3-24-4.5t-24-1.5q-85 0-143.5 58.5T578 796q0 12 1.5 24t4.5 24H132Z"/>
    </Icon>
  );
});

IconMaterialAmbientScreenW100Filled.displayName = 'AmauiIconMaterialAmbientScreenW100Filled';

export default IconMaterialAmbientScreenW100Filled;
