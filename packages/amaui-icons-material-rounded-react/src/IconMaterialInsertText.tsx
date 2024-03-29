import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertText'

      short_name='InsertText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16v-6H8V8h8v2h-3v6ZM1 23v-6h2V7H1V1h6v2h10V1h6v6h-2v10h2v6h-6v-2H7v2Zm6-4h10v-2h2V7h-2V5H7v2H5v10h2ZM3 5h2V3H3Zm16 0h2V3h-2Zm0 16h2v-2h-2ZM3 21h2v-2H3ZM19 5Zm0 14ZM5 19ZM5 5Z"/>
    </Icon>
  );
});

IconMaterialInsertText.displayName = 'AmauiIconMaterialInsertText';

export default IconMaterialInsertText;
