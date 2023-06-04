import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitbitCheckSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitbitCheckSmallW100Filled'

      short_name='FitbitCheckSmall'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m420 669 214-215q3.911-4 9.956-4Q650 450 654 453.929q4 3.928 4 10Q658 470 654 474L441 686q-9 9-21 9t-21-9l-93-92q-4-3.911-4-9.956Q302 578 305.929 574q3.928-4 10-4Q322 570 326 574l94 95Z"/>
    </Icon>
  );
});

IconMaterialFitbitCheckSmallW100Filled.displayName = 'AmauiIconMaterialFitbitCheckSmallW100Filled';

export default IconMaterialFitbitCheckSmallW100Filled;
