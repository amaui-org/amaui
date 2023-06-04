import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFireHydrantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireHydrantW100Filled'

      short_name='FireHydrant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.75 20.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H7.3v-4.175H5.75q-.275 0-.487-.212-.213-.213-.213-.488v-2.25q0-.275.213-.488.212-.212.487-.212H7.3V8H5.75q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.6q.275-1.725 1.575-2.863Q10.225 3.3 12 3.3q1.775 0 3.075 1.137 1.3 1.138 1.575 2.863h1.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H16.7v4.175h1.55q.275 0 .488.212.212.213.212.488v2.25q0 .275-.212.488-.213.212-.488.212H16.7V20h1.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12 16.9q1.2 0 2.05-.85.85-.85.85-2.05 0-1.2-.85-2.05-.85-.85-2.05-.85-1.2 0-2.05.85-.85.85-.85 2.05 0 1.2.85 2.05.85.85 2.05.85Zm0-.7q-.925 0-1.562-.638Q9.8 14.925 9.8 14t.638-1.562Q11.075 11.8 12 11.8t1.562.638q.638.637.638 1.562t-.638 1.562q-.637.638-1.562.638Z"/>
    </Icon>
  );
});

IconMaterialFireHydrantW100Filled.displayName = 'AmauiIconMaterialFireHydrantW100Filled';

export default IconMaterialFireHydrantW100Filled;
