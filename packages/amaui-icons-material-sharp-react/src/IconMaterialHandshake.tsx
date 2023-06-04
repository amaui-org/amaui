import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandshake = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Handshake'

      short_name='Handshake'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.85 23-9.875-9.875 7.55-7.55 3.65 3.65.7-.7-5.35-5.35L1.7 10l.975.975L1.25 12.4l-2.35-2.35L8.575.375l3.1 3.1 3.1-3.1 9.85 9.85Zm.025-2.8 9.925-9.975-7.05-7.05-1.675 1.675 3.65 3.65-3.55 3.55-3.65-3.65L4.8 13.125l.725.725 3.725-3.725 1.4 1.4-3.725 3.725.7.7 3.725-3.725 1.425 1.425-3.725 3.725.7.7 3.725-3.725 1.4 1.4-3.725 3.725Zm-2.9-12.825Z"/>
    </Icon>
  );
});

IconMaterialHandshake.displayName = 'AmauiIconMaterialHandshake';

export default IconMaterialHandshake;
