import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWifiMistralW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiMistralW100Filled'

      short_name='NestWifiMistral'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 19.7q-1.425 0-2.6-.85t-1.6-2.35h15.1q-.425 1.5-1.6 2.35-1.175.85-2.6.85Zm-4.325-3.9q-.025-.1-.025-.238V8.65q0-1.8 1.275-3.075Q6.85 4.3 8.65 4.3h6.7q1.8 0 3.075 1.275Q19.7 6.85 19.7 8.65v6.925q0 .15-.025.225Z"/>
    </Icon>
  );
});

IconMaterialNestWifiMistralW100Filled.displayName = 'AmauiIconMaterialNestWifiMistralW100Filled';

export default IconMaterialNestWifiMistralW100Filled;
