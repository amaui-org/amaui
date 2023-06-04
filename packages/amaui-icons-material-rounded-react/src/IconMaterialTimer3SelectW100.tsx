import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer3SelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3SelectW100'

      short_name='Timer3Select'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 17.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.85q.35 0 .575-.225.225-.225.225-.575v-3.2q0-.35-.225-.575-.225-.225-.575-.225H5.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.85q.35 0 .575-.225.225-.225.225-.575v-3.2q0-.35-.225-.575-.225-.225-.575-.225H5.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.85q.65 0 1.075.425.425.425.425 1.075v3.4q0 .375-.275.662-.275.288-.5.288.225 0 .5.287.275.288.275.663v3.4q0 .65-.425 1.075-.425.425-1.075.425Zm10 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.65v-2.3h-3.3q-.3 0-.5-.2t-.2-.5v-2.3q0-.3.2-.5t.5-.2h3.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3.65v2.3h3.3q.3 0 .5.2t.2.5v2.3q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialTimer3SelectW100.displayName = 'AmauiIconMaterialTimer3SelectW100';

export default IconMaterialTimer3SelectW100;
