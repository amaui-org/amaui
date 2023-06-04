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
      <path d="M420 707 297 584l19-19 104 104 224-224 19 19-243 243Z"/>
    </Icon>
  );
});

IconMaterialFitbitCheckSmallW100Filled.displayName = 'AmauiIconMaterialFitbitCheckSmallW100Filled';

export default IconMaterialFitbitCheckSmallW100Filled;
