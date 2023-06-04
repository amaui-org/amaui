import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListW100Filled'

      short_name='List'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 8.35q-.15 0-.25-.1T7.3 8q0-.15.1-.25t.25-.1H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1T7.3 12q0-.15.1-.25t.25-.1H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1T7.3 16q0-.15.1-.25t.25-.1H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM4.2 8.55q-.225 0-.388-.163Q3.65 8.225 3.65 8t.162-.388q.163-.162.388-.162t.388.162q.162.163.162.388t-.162.387q-.163.163-.388.163Zm0 4q-.225 0-.388-.163-.162-.162-.162-.387t.162-.388q.163-.162.388-.162t.388.162q.162.163.162.388t-.162.387q-.163.163-.388.163Zm0 4q-.225 0-.388-.162-.162-.163-.162-.388t.162-.387q.163-.163.388-.163t.388.163q.162.162.162.387t-.162.388q-.163.162-.388.162Z"/>
    </Icon>
  );
});

IconMaterialListW100Filled.displayName = 'AmauiIconMaterialListW100Filled';

export default IconMaterialListW100Filled;
