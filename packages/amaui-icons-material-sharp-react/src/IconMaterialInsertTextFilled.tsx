import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertTextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertTextFilled'

      short_name='InsertText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16v-6H8V8h8v2h-3v6ZM1 23v-6h2V7H1V1h6v2h10V1h6v6h-2v10h2v6h-6v-2H7v2Zm6-4h10v-2h2V7h-2V5H7v2H5v10h2Z"/>
    </Icon>
  );
});

IconMaterialInsertTextFilled.displayName = 'AmauiIconMaterialInsertTextFilled';

export default IconMaterialInsertTextFilled;
