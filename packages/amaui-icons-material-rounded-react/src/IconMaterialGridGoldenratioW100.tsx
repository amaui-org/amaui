import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridGoldenratioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridGoldenratioW100'

      short_name='GridGoldenratio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 20.7q-.15 0-.25-.1t-.1-.25V13.7H3.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.65v-2H3.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.65V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.65h2V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.65h6.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H13.7v2h6.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H13.7v6.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V13.7h-2v6.65q0 .15-.1.25t-.25.1ZM11 13h2v-2h-2Z"/>
    </Icon>
  );
});

IconMaterialGridGoldenratioW100.displayName = 'AmauiIconMaterialGridGoldenratioW100';

export default IconMaterialGridGoldenratioW100;
