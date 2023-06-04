import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivateConnectivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivateConnectivityW100'

      short_name='PrivateConnectivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.7q-2.275 0-3.925-1.55T6.3 12.35H2.5v-.7h3.8q.125-2.25 1.775-3.8Q9.725 6.3 12 6.3t3.925 1.55q1.65 1.55 1.775 3.8h3.8v.7h-3.8q-.125 2.25-1.775 3.8Q14.275 17.7 12 17.7Zm0-.7q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17Zm-2.85-1.8h5.7v-4.7h-1v-.75q0-.825-.525-1.387Q12.8 7.8 12 7.8q-.775 0-1.312.538-.538.537-.538 1.312v.85h-1ZM12 13.55q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-1.15-3.05v-.85q0-.475.338-.813.337-.337.812-.337.475 0 .812.337.338.338.338.813v.85ZM12 12.85Z"/>
    </Icon>
  );
});

IconMaterialPrivateConnectivityW100.displayName = 'AmauiIconMaterialPrivateConnectivityW100';

export default IconMaterialPrivateConnectivityW100;
