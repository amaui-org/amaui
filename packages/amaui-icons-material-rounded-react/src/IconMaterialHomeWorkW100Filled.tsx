import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeWorkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkW100Filled'

      short_name='HomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.7 19.7v-8.275q0-.375-.162-.7-.163-.325-.463-.525L10.5 6.925V5q0-.275.213-.488.212-.212.487-.212H21q.275 0 .488.212.212.213.212.488v14q0 .275-.212.487-.213.213-.488.213Zm1.6-3h1.4v-1.4h-1.4Zm0-4h1.4v-1.4h-1.4Zm0-4h1.4V7.3h-1.4Zm-15 10.25v-6.525q0-.35.163-.688.162-.337.462-.537l4.2-2.975q.4-.275.875-.275t.875.275l4.2 2.975q.3.2.463.537.162.338.162.688v6.525q0 .325-.212.537-.213.213-.538.213H9.8v-4.8H6.2v4.8H3.05q-.325 0-.537-.213-.213-.212-.213-.537Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkW100Filled.displayName = 'AmauiIconMaterialHomeWorkW100Filled';

export default IconMaterialHomeWorkW100Filled;
