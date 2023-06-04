import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitbitCheckSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitbitCheckSmallFilled'

      short_name='FitbitCheckSmall'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M420 744 260 584l56-56 104 104 224-224 56 56-280 280Z"/>
    </Icon>
  );
});

IconMaterialFitbitCheckSmallFilled.displayName = 'AmauiIconMaterialFitbitCheckSmallFilled';

export default IconMaterialFitbitCheckSmallFilled;
