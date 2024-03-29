import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowSensor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensor'

      short_name='WindowSensor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 9q-.425 0-.712-.288Q21 8.425 21 8V4q0-.425.288-.713Q21.575 3 22 3t.712.287Q23 3.575 23 4v4q0 .425-.288.712Q22.425 9 22 9ZM3 21V3h16v18Zm2-10h5v-1h2v1h5V5H5Zm0 8h12v-6H5Zm0 0h12H5Z"/>
    </Icon>
  );
});

IconMaterialWindowSensor.displayName = 'AmauiIconMaterialWindowSensor';

export default IconMaterialWindowSensor;
