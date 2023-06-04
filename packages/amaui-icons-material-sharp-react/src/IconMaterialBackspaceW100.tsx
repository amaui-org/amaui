import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackspaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceW100'

      short_name='Backspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 15.1 2.6-2.6 2.6 2.6.5-.5-2.6-2.6 2.6-2.6-.5-.5-2.6 2.6-2.6-2.6-.5.5 2.6 2.6-2.6 2.6Zm-2.425 2.6L4.45 12l4.025-5.7H19.55v11.4Zm.35-.7h9.975V7H8.875L5.3 12Zm9.975 0V7Z"/>
    </Icon>
  );
});

IconMaterialBackspaceW100.displayName = 'AmauiIconMaterialBackspaceW100';

export default IconMaterialBackspaceW100;
