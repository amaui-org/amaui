import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatReadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadW100Filled'

      short_name='MarkChatRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 19.075-2.6-2.625.475-.475L17.35 18.1l4.25-4.25.475.5ZM3.3 19.5V3.3h17.4v8.35h-8.05v5.05H6.1Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadW100Filled.displayName = 'AmauiIconMaterialMarkChatReadW100Filled';

export default IconMaterialMarkChatReadW100Filled;
