import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTempleHinduW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHinduW100'

      short_name='TempleHindu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.35 21.35q-.275 0-.487-.212-.213-.213-.213-.488V12q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.125l3.15-10.425V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h3.325V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.1l3.175 10.55h3.125V12q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.65q0 .275-.212.488-.213.212-.488.212h-7v-5h-3.3v5Zm4.475-9.7h8.35l-1-3.3h-6.35Zm1.2-4h5.95l-1-3.3h-3.95Zm-5.675 13h6.3v-5h4.7v5h6.3v-6.3h-3.675l-.6-2h-8.75l-.6 2H3.35ZM12 12.5Z"/>
    </Icon>
  );
});

IconMaterialTempleHinduW100.displayName = 'AmauiIconMaterialTempleHinduW100';

export default IconMaterialTempleHinduW100;
