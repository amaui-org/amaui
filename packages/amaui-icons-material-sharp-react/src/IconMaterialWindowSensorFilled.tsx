import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowSensorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensorFilled'

      short_name='WindowSensor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 9q-.425 0-.712-.288Q21 8.425 21 8V4q0-.425.288-.713Q21.575 3 22 3t.712.287Q23 3.575 23 4v4q0 .425-.288.712Q22.425 9 22 9ZM3 21V3h16v18Zm3-10h4v-1h2v1h4V6H6Zm0 7h10v-5H6Zm-1 1h12V5H5Z"/>
    </Icon>
  );
});

IconMaterialWindowSensorFilled.displayName = 'AmauiIconMaterialWindowSensorFilled';

export default IconMaterialWindowSensorFilled;
