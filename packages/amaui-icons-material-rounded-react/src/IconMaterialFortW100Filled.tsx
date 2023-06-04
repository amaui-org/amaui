import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFortW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortW100Filled'

      short_name='Fort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.35 20.35q-.275 0-.487-.212-.213-.213-.213-.488v-2.075q0-.125.05-.263.05-.137.15-.237l1.8-1.8v-6.55l-1.8-1.8q-.1-.1-.15-.237-.05-.138-.05-.263V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.425q0 .125-.05.263-.05.137-.15.237l-1.8 1.8v1.925h7.3V8.725l-1.8-1.8q-.1-.1-.15-.237-.05-.138-.05-.263V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.425q0 .125-.05.263-.05.137-.15.237l-1.8 1.8v6.55l1.8 1.8q.1.1.15.237.05.138.05.263v2.075q0 .275-.212.488-.213.212-.488.212h-7V18q0-1.1-.775-1.875Q13.1 15.35 12 15.35t-1.875.775Q9.35 16.9 9.35 18v2.35Z"/>
    </Icon>
  );
});

IconMaterialFortW100Filled.displayName = 'AmauiIconMaterialFortW100Filled';

export default IconMaterialFortW100Filled;
