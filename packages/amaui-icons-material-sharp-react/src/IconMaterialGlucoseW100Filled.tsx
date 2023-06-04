import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlucoseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlucoseW100Filled'

      short_name='Glucose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M540 924 286 628l59-45 127 81V242h28v348h95V372h28v218h95V422h28v168h95v-88h28v422H540ZM180 470q-48 0-81-32.5T66 358q0-29 11-49t59-74l44-50 43 50q48 55 59.5 74.5T294 358q0 46-33 79t-81 33Z"/>
    </Icon>
  );
});

IconMaterialGlucoseW100Filled.displayName = 'AmauiIconMaterialGlucoseW100Filled';

export default IconMaterialGlucoseW100Filled;
