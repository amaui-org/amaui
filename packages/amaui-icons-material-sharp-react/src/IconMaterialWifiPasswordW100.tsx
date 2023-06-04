import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiPasswordW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiPasswordW100'

      short_name='WifiPassword'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.2 23.65v-4.4h1.025v-1q0-.725.488-1.212.487-.488 1.212-.488t1.213.488q.487.487.487 1.212v1h.975v4.4Zm1.725-4.4h2v-1q0-.425-.287-.712-.288-.288-.713-.288t-.713.288q-.287.287-.287.712ZM6.35 15.35l-.7-.7Q6.9 13.4 8.512 12.7 10.125 12 12 12t3.488.7q1.612.7 2.862 1.95l-.7.7q-1.1-1.1-2.55-1.725Q13.65 13 12 13q-1.65 0-3.1.625-1.45.625-2.55 1.725ZM2.1 11.1l-.7-.7q2.025-2.025 4.725-3.212Q8.825 6 12 6t5.875 1.188q2.7 1.187 4.725 3.212l-.7.7q-1.925-1.925-4.462-3.013Q14.9 7 12 7T6.562 8.087Q4.025 9.175 2.1 11.1ZM12 21l2.125-2.125q-.425-.425-.962-.65Q12.625 18 12 18t-1.162.225q-.538.225-.963.65Z"/>
    </Icon>
  );
});

IconMaterialWifiPasswordW100.displayName = 'AmauiIconMaterialWifiPasswordW100';

export default IconMaterialWifiPasswordW100;
