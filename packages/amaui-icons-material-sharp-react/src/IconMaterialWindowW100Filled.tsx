import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowW100Filled'

      short_name='Window'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 11.65H3.3V3.3h8.35Zm.7 0V3.3h8.35v8.35Zm-.7.7v8.35H3.3v-8.35Zm9.05 8.35h-8.35v-8.35h8.35Z"/>
    </Icon>
  );
});

IconMaterialWindowW100Filled.displayName = 'AmauiIconMaterialWindowW100Filled';

export default IconMaterialWindowW100Filled;
