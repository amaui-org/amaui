import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPottedPlantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantW100'

      short_name='PottedPlant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.675 20h6.65l1.275-5.05H7.4Zm7.2.7H8.15l-1.475-5.75h10.65ZM5.5 14.25h13.05V12H5.5ZM12 8.875q.25-1.8 1.525-3.075Q14.8 4.525 16.6 4.3q-.225 1.675-1.412 2.937Q14 8.5 12.35 8.85v2.45h6.9v3.65H4.8V11.3h6.85V8.85Q10 8.5 8.825 7.25 7.65 6 7.4 4.3q1.8.225 3.075 1.5Q11.75 7.075 12 8.875Z"/>
    </Icon>
  );
});

IconMaterialPottedPlantW100.displayName = 'AmauiIconMaterialPottedPlantW100';

export default IconMaterialPottedPlantW100;
