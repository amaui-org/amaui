import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitbitCheckSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitbitCheckSmall'

      short_name='FitbitCheckSmall'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M420 744 260 584l56-56 104 104 224-224 56 56-280 280Z"/>
    </Icon>
  );
});

IconMaterialFitbitCheckSmall.displayName = 'AmauiIconMaterialFitbitCheckSmall';

export default IconMaterialFitbitCheckSmall;
