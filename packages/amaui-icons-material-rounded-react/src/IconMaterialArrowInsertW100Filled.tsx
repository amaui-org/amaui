import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowInsertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowInsertW100Filled'

      short_name='ArrowInsert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.625 6.85V16q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V6.4q0-.325.213-.538.212-.212.537-.212h9.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-9.15l10 10.025q.1.1.087.238-.012.137-.112.237-.1.1-.225.1t-.225-.1Z"/>
    </Icon>
  );
});

IconMaterialArrowInsertW100Filled.displayName = 'AmauiIconMaterialArrowInsertW100Filled';

export default IconMaterialArrowInsertW100Filled;
