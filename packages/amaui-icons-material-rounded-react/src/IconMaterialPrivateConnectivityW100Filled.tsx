import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivateConnectivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivateConnectivityW100Filled'

      short_name='PrivateConnectivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.7q-2.275 0-3.925-1.55T6.3 12.35H2.85q-.15 0-.25-.1T2.5 12q0-.15.1-.25t.25-.1H6.3q.125-2.25 1.775-3.8Q9.725 6.3 12 6.3t3.925 1.55q1.65 1.55 1.775 3.8h3.45q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H17.7q-.125 2.25-1.775 3.8Q14.275 17.7 12 17.7Zm-2-2.5h4q.35 0 .6-.25t.25-.6v-3q0-.35-.25-.6t-.6-.25h-.15v-.75q0-.825-.525-1.387Q12.8 7.8 12 7.8q-.775 0-1.312.538-.538.537-.538 1.312v.85H10q-.35 0-.6.25t-.25.6v3q0 .35.25.6t.6.25Zm2-1.65q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-1.15-3.05v-.85q0-.475.338-.813.337-.337.812-.337.475 0 .812.337.338.338.338.813v.85Z"/>
    </Icon>
  );
});

IconMaterialPrivateConnectivityW100Filled.displayName = 'AmauiIconMaterialPrivateConnectivityW100Filled';

export default IconMaterialPrivateConnectivityW100Filled;
