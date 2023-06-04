import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertPageBreakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreakW100Filled'

      short_name='InsertPageBreak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7v-4.35h13.4v4.35Zm9-13H18L14.3 4Zm-5.05 6.65v-.7h5.5v.7Zm7.5 0v-.7h5.5v.7Zm-15 0v-.7h5.5v.7Zm3.55-2.7V3.3h9.35l4.05 4.05v4.3Z"/>
    </Icon>
  );
});

IconMaterialInsertPageBreakW100Filled.displayName = 'AmauiIconMaterialInsertPageBreakW100Filled';

export default IconMaterialInsertPageBreakW100Filled;
