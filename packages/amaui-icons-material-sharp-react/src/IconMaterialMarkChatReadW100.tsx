import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatReadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadW100'

      short_name='MarkChatRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 19.075-2.6-2.625.475-.475L17.35 18.1l4.25-4.25.475.5ZM3.3 19.5V3.3h17.4v8.35H20V4H4v13.8L5.8 16h6.85v.7H6.1ZM4 16v1.8V4Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadW100.displayName = 'AmauiIconMaterialMarkChatReadW100';

export default IconMaterialMarkChatReadW100;
