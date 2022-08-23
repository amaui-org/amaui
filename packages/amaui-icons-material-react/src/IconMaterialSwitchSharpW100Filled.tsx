import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchSharpW100Filled'
      short_name='Switch'

      {...props}
    >
      <path d="M8.65 16.35h6.7v-8.7h-6.7Zm.7-.7v-7.3h5.3v7.3Zm1.9-3.9h1.5v-1.5h-1.5ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSwitchSharpW100Filled.displayName = 'AmauiIconMaterialSwitchSharpW100Filled';

export default IconMaterialSwitchSharpW100Filled;
