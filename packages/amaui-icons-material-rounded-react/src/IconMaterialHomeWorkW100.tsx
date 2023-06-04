import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeWorkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkW100'

      short_name='HomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.3 8.7h1.4V7.3h-1.4Zm0 4h1.4v-1.4h-1.4Zm0 4h1.4v-1.4h-1.4Zm-1.6 3V19H21V5h-9.8v2.425l-.7-.5V5q0-.275.213-.488.212-.212.487-.212H21q.275 0 .488.212.212.213.212.488v14q0 .275-.212.487-.213.213-.488.213Zm0-8.275ZM2.3 18.95v-6.525q0-.35.163-.688.162-.337.462-.537l4.2-2.975q.4-.275.875-.275t.875.275l4.2 2.975q.3.2.463.537.162.338.162.688v6.525q0 .325-.212.537-.213.213-.538.213h-3.6v-4.35h-2.7v4.35h-3.6q-.325 0-.537-.213-.213-.212-.213-.537ZM3 19h2.95v-4.35h4.1V19H13v-7L8 8.5 3 12Zm7.05 0v-4.35h-4.1V19v-4.35h4.1Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkW100.displayName = 'AmauiIconMaterialHomeWorkW100';

export default IconMaterialHomeWorkW100;
