import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTerminalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TerminalFilled'

      short_name='Terminal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2h16V8H4Zm8-1v-2h6v2Zm-4.5 0-1.4-1.4L8.675 13l-2.6-2.6L7.5 9l4 4Z"/>
    </Icon>
  );
});

IconMaterialTerminalFilled.displayName = 'AmauiIconMaterialTerminalFilled';

export default IconMaterialTerminalFilled;
