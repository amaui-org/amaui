import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertPageBreak = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreak'

      short_name='InsertPageBreak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22v-5h2v3h12v-3h2v5Zm0-11V2h10l6 6v3h-2V9h-5V4H6v7Zm5 4v-2h6v2Zm8 0v-2h6v2ZM1 15v-2h6v2Zm11-4Zm0 6Z"/>
    </Icon>
  );
});

IconMaterialInsertPageBreak.displayName = 'AmauiIconMaterialInsertPageBreak';

export default IconMaterialInsertPageBreak;
