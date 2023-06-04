import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindowW100'

      short_name='SensorWindow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.675q-.65 0-1.075-.425-.425-.425-.425-1.075V4.825q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v14.35q0 .65-.425 1.075-.425.425-1.075.425ZM6 11.65h4.65v-.7h2.7v.7H18V4.825q0-.3-.25-.55-.25-.25-.55-.25H6.8q-.3 0-.55.25-.25.25-.25.55Zm0 .7v6.825q0 .3.25.55.25.25.55.25h10.4q.3 0 .55-.25.25-.25.25-.55V12.35Zm0 7.625h12H6Z"/>
    </Icon>
  );
});

IconMaterialSensorWindowW100.displayName = 'AmauiIconMaterialSensorWindowW100';

export default IconMaterialSensorWindowW100;
