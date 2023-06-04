import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlucoseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlucoseW100'

      short_name='Glucose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m286 628 59-45 127 81V242h28v474l-152-97-21 14 225 263h289V502h28v422H540L286 628Zm309-38V372h28v218h-28Zm123 0V422h28v168h-28ZM180 470q-48 0-81-32.5T66 358q0-29 11-49t59-74l44-50 43 50q48 55 59.5 74.5T294 358q0 46-33 79t-81 33Zm0-28q36 0 61-24.5t25-59.5q0-20-10.5-37.5T202 253l-23-25-21 25q-42 48-53 66t-11 39q0 35 25 59.5t61 24.5Zm0-84Zm661 538H552h289Z"/>
    </Icon>
  );
});

IconMaterialGlucoseW100.displayName = 'AmauiIconMaterialGlucoseW100';

export default IconMaterialGlucoseW100;
