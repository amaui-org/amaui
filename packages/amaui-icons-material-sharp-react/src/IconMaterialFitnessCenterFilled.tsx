import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitnessCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessCenterFilled'

      short_name='FitnessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.4 21.9 12 20.5l3.55-3.55-8.5-8.5L3.5 12l-1.4-1.4 1.4-1.45-1.4-1.4 2.1-2.1L2.8 4.2l1.4-1.4 1.45 1.4 2.1-2.1 1.4 1.4 1.45-1.4L12 3.5 8.45 7.05l8.5 8.5L20.5 12l1.4 1.4-1.4 1.45 1.4 1.4-2.1 2.1 1.4 1.45-1.4 1.4-1.45-1.4-2.1 2.1-1.4-1.4Z"/>
    </Icon>
  );
});

IconMaterialFitnessCenterFilled.displayName = 'AmauiIconMaterialFitnessCenterFilled';

export default IconMaterialFitnessCenterFilled;
