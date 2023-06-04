import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleHinduW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduW100Filled'

      short_name='TempleHindu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.3 7.65 1.325-4.425V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.325V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.1l1.35 4.55Zm-4.95 13.7q-.275 0-.487-.212-.213-.213-.213-.488V12q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.125l.4-1.3h10.25l.4 1.3h3.125V12q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.65q0 .275-.212.488-.213.212-.488.212h-7v-5h-3.3v5Zm3.75-9.7.975-3.3h7.85l.975 3.3Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduW100Filled.displayName = 'AmauiIconMaterialTempleHinduW100Filled';

export default IconMaterialTempleHinduW100Filled;
