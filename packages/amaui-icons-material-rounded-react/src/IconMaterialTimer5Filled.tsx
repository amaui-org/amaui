import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer5Filled'

      short_name='Timer5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-270q33 0 56.5-23.5T600-350v-50q0-33-23.5-56.5T520-480h-80v-50h120q17 0 28.5-11.5T600-570q0-17-11.5-28.5T560-610H400q-17 0-28.5 11.5T360-570v130q0 17 11.5 28.5T400-400h120v50H400q-17 0-28.5 11.5T360-310q0 17 11.5 28.5T400-270h120ZM400-840q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 760q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l28-28q11-11 28-11t28 11q11 11 11 28t-11 28l-28 28q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialTimer5Filled.displayName = 'AmauiIconMaterialTimer5Filled';

export default IconMaterialTimer5Filled;
