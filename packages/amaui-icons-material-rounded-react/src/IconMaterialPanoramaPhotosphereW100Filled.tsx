import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaPhotosphereW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaPhotosphereW100Filled'

      short_name='PanoramaPhotosphere'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 19.85q-2.175 0-4.025-1.125Q6.1 17.6 5 15.625q-.65-.2-1.2-.425-.55-.225-1.15-.5-.175-.075-.262-.238Q2.3 14.3 2.3 14.1V9.9q0-.2.088-.363.087-.162.262-.237.6-.275 1.15-.5.55-.225 1.2-.425 1.1-1.975 2.95-3.1t4.025-1.125q2.175 0 4.025 1.125 1.85 1.125 2.95 3.1.65.2 1.2.425.55.225 1.15.5.2.1.3.262.1.163.1.363V14.1q0 .2-.1.362-.1.163-.3.238-.6.275-1.15.5-.55.225-1.2.425-1.1 1.975-2.95 3.1t-4.025 1.125Zm0-.7q1.875 0 3.388-.862 1.512-.863 2.612-2.388-1.4.375-2.913.587-1.512.213-3.087.213-1.575 0-3.088-.213-1.512-.212-2.912-.587 1.1 1.525 2.613 2.388 1.512.862 3.387.862Zm0-14.3q-1.875 0-3.387.862-1.513.863-2.613 2.388 1.4-.375 2.912-.588Q10.4 7.3 11.975 7.3q1.575 0 3.087.212 1.513.213 2.913.588-1.1-1.525-2.612-2.388-1.513-.862-3.388-.862Z"/>
    </Icon>
  );
});

IconMaterialPanoramaPhotosphereW100Filled.displayName = 'AmauiIconMaterialPanoramaPhotosphereW100Filled';

export default IconMaterialPanoramaPhotosphereW100Filled;
