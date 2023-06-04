import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitnessCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessCenterW100Filled'

      short_name='FitnessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.65 21.25-.75-.75 3.55-3.55-9.4-9.4L3.5 11.1l-.75-.75L4.2 8.9l-.75-.75 2.1-2.1-1.4-1.4.5-.5 1.4 1.4 2.1-2.1.75.75 1.45-1.45.75.75-3.55 3.55 9.4 9.4 3.55-3.55.75.75-1.45 1.45.75.75-2.1 2.1 1.4 1.4-.5.5-1.4-1.4-2.1 2.1-.75-.75Z"/>
    </Icon>
  );
});

IconMaterialFitnessCenterW100Filled.displayName = 'AmauiIconMaterialFitnessCenterW100Filled';

export default IconMaterialFitnessCenterW100Filled;
