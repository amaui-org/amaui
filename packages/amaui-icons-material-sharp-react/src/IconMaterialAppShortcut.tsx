import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppShortcut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcut'

      short_name='AppShortcut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21 11-.625-1.375L19 9l1.375-.625L21 7l.625 1.375L23 9l-1.375.625Zm-5 5-1.25-2.75L12 12l2.75-1.25L16 8l1.25 2.75L20 12l-2.75 1.25Zm5 1-.625-1.375L19 15l1.375-.625L21 13l.625 1.375L23 15l-1.375.625ZM7 21h10v-1H7ZM7 4h10V3H7ZM5 23V1h14v6h-2V6H7v12h10v-1h2v6ZM7 4V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialAppShortcut.displayName = 'AmauiIconMaterialAppShortcut';

export default IconMaterialAppShortcut;
