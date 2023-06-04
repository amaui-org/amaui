import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertPageBreakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreakFilled'

      short_name='InsertPageBreak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22v-5h16v5Zm9-13h5l-5-5Zm-4 6v-2h6v2Zm8 0v-2h6v2ZM1 15v-2h6v2Zm3-4V2h10l6 6v3Z"/>
    </Icon>
  );
});

IconMaterialInsertPageBreakFilled.displayName = 'AmauiIconMaterialInsertPageBreakFilled';

export default IconMaterialInsertPageBreakFilled;
