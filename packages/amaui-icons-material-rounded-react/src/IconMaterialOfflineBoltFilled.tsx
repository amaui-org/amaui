import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflineBoltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineBoltFilled'

      short_name='OfflineBolt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.4 13.5v3.425q0 .4.375.488.375.087.575-.263l3.025-5.925q.125-.25-.025-.487-.15-.238-.425-.238H12.75V7.025q0-.4-.375-.5-.375-.1-.575.25l-3.15 6q-.125.25.013.487.137.238.412.238ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialOfflineBoltFilled.displayName = 'AmauiIconMaterialOfflineBoltFilled';

export default IconMaterialOfflineBoltFilled;
