import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplyAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyAllW100Filled'

      short_name='ReplyAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.875 16.1-5.1-5.1 5.1-5.1.5.5-4.6 4.6 4.6 4.6Zm12.65 2.25V15q0-1.5-1.075-2.575-1.075-1.075-2.575-1.075h-7.75l4.25 4.25-.5.5-5.1-5.1 5.1-5.1.5.5-4.25 4.25h7.75q1.8 0 3.075 1.275Q21.225 13.2 21.225 15v3.35Z"/>
    </Icon>
  );
});

IconMaterialReplyAllW100Filled.displayName = 'AmauiIconMaterialReplyAllW100Filled';

export default IconMaterialReplyAllW100Filled;
