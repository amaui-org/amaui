import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapVertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVertW100Filled'

      short_name='SwapVert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 12.35v-8.1L5.4 7.5 4.9 7 9 2.9 13.1 7l-.5.5-3.25-3.25v8.1ZM15 21.1 10.9 17l.5-.5 3.25 3.25v-8.1h.7v8.1l3.25-3.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialSwapVertW100Filled.displayName = 'AmauiIconMaterialSwapVertW100Filled';

export default IconMaterialSwapVertW100Filled;
