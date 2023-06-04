import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorWindowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindowW100Filled'

      short_name='SensorWindow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.675q-.65 0-1.075-.425-.425-.425-.425-1.075V4.825q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v14.35q0 .65-.425 1.075-.425.425-1.075.425Zm-.1-9.2h3.95v-.7h2.7v.7h3.95v-6.05q0-.3-.25-.55-.25-.25-.55-.25h-9q-.3 0-.55.25-.25.25-.25.55Zm0 .7v6.4q0 .3.25.55.25.25.55.25h9q.3 0 .55-.25.25-.25.25-.55v-6.4ZM6 4.825v14.35q0 .3.25.55.25.25.55.25h10.4q.3 0 .55-.25.25-.25.25-.55V4.825q0-.3-.25-.55-.25-.25-.55-.25H6.8q-.3 0-.55.25-.25.25-.25.55Z"/>
    </Icon>
  );
});

IconMaterialSensorWindowW100Filled.displayName = 'AmauiIconMaterialSensorWindowW100Filled';

export default IconMaterialSensorWindowW100Filled;
