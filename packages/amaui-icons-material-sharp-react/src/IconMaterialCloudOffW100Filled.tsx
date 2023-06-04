import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOffW100Filled'

      short_name='CloudOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.65 21.65-2.9-2.95H6.5q-1.775 0-2.987-1.213Q2.3 16.275 2.3 14.5q0-1.8 1.238-3 1.237-1.2 2.812-1.2 0-.425.225-1.088Q6.8 8.55 7.1 8.1L3.3 4.3l.5-.5 17.35 17.35Zm.05-3.8L9 6.15q.875-.5 1.538-.675Q11.2 5.3 12 5.3q2.375 0 4.038 1.663Q17.7 8.625 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 .6-.212 1.188-.213.587-.788 1.162Z"/>
    </Icon>
  );
});

IconMaterialCloudOffW100Filled.displayName = 'AmauiIconMaterialCloudOffW100Filled';

export default IconMaterialCloudOffW100Filled;
