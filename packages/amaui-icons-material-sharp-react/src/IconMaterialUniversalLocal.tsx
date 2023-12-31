import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUniversalLocal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalLocal'

      short_name='UniversalLocal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240h640v-480H160v480Zm-80 80v-640h800v640H80Zm80-80v-480 480Zm320-240q-17 0-28.5-11.5T440-520q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520q0 17-11.5 28.5T480-480Zm0 200q81-69 120.5-127.5T640-516q0-75-48.5-119.5T480-680q-63 0-111.5 44.5T320-516q0 50 39.5 108.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialUniversalLocal.displayName = 'AmauiIconMaterialUniversalLocal';

export default IconMaterialUniversalLocal;
