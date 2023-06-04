import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTerminalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TerminalW100'

      short_name='Terminal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h16V8H4Zm8.65-1.65v-.7h4.7v.7Zm-5.15-.275-.475-.475L9.6 13 7 10.4l.5-.475L10.575 13Z"/>
    </Icon>
  );
});

IconMaterialTerminalW100.displayName = 'AmauiIconMaterialTerminalW100';

export default IconMaterialTerminalW100;
