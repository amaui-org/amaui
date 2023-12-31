import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityHelperW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityHelperW100Filled'

      short_name='HumidityHelper'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-132q-111.388 0-189.694-76.707Q132-285.414 132-395.472 132-448 153.5-496q21.5-48 56.5-86l190-186 190 186q35 38 56.5 86.04Q668-447.919 668-395.284 668-285 589.694-208.5 511.388-132 400-132Zm313-426q0-64.583-45.208-109.792Q622.583-713 558-713q64.583 0 109.792-45.208Q713-803.417 713-868q0 64.583 45.208 109.792Q803.417-713 868-713q-64.583 0-109.792 45.208Q713-622.583 713-558Z"/>
    </Icon>
  );
});

IconMaterialHumidityHelperW100Filled.displayName = 'AmauiIconMaterialHumidityHelperW100Filled';

export default IconMaterialHumidityHelperW100Filled;
