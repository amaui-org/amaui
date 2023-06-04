import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaPhotosphereW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaPhotosphereW100'

      short_name='PanoramaPhotosphere'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 19.85q-2.175 0-4.025-1.125Q6.1 17.6 5 15.625L2.3 14.55v-5.1L5 8.375q1.1-1.975 2.95-3.1t4.025-1.125q2.175 0 4.025 1.125 1.85 1.125 2.95 3.1L21.7 9.45v5.1l-2.75 1.075q-1.1 1.975-2.95 3.1t-4.025 1.125Zm0-.7q1.875 0 3.388-.862 1.512-.863 2.612-2.388-1.4.375-2.913.587-1.512.213-3.087.213-1.575 0-3.088-.213-1.512-.212-2.912-.587 1.1 1.525 2.613 2.388 1.512.862 3.387.862ZM12 12Zm-.025-7.15q-1.875 0-3.387.862-1.513.863-2.613 2.388 1.4-.375 2.912-.588Q10.4 7.3 11.975 7.3q1.575 0 3.087.212 1.513.213 2.913.588-1.1-1.525-2.612-2.388-1.513-.862-3.388-.862ZM12 16q2.5 0 4.8-.512 2.3-.513 4.2-1.388V9.9q-1.9-.875-4.2-1.388Q14.5 8 12 8t-4.8.512Q4.9 9.025 3 9.9v4.2q1.9.875 4.2 1.388Q9.5 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialPanoramaPhotosphereW100.displayName = 'AmauiIconMaterialPanoramaPhotosphereW100';

export default IconMaterialPanoramaPhotosphereW100;
