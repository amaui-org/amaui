import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSevereColdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SevereColdW100Filled'

      short_name='SevereCold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 9.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-9.35 12v-4.525l-3.25 3.25-.475-.475 3.725-3.725V13.35H8.125L4.4 17.075l-.475-.475 3.25-3.25H2.65v-.7h4.525L3.925 9.4l.475-.475 3.725 3.725h2.525v-2.525L6.925 6.4l.475-.475 3.25 3.25V4.65h.7v4.525l3.25-3.25.475.475-3.725 3.725v2.525h8v.7h-4.525l3.25 3.25-.475.475-3.725-3.725H11.35v2.525l3.725 3.725-.475.475-3.25-3.25v4.525Zm9-14.7v-4h.7v4Z"/>
    </Icon>
  );
});

IconMaterialSevereColdW100Filled.displayName = 'AmauiIconMaterialSevereColdW100Filled';

export default IconMaterialSevereColdW100Filled;
