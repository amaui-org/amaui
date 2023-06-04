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
      <path d="m420 632 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L448 716q-12 12-28 12t-28-12L288 612q-11-11-11-28t11-28q11-11 28-11t28 11l76 76Z"/>
    </Icon>
  );
});

IconMaterialFitbitCheckSmall.displayName = 'AmauiIconMaterialFitbitCheckSmall';

export default IconMaterialFitbitCheckSmall;
