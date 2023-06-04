import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTapasW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapasW100Filled'

      short_name='Tapas'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 22.15v-9.3H5q-.775 0-1.312-.538Q3.15 11.775 3.15 11t.538-1.312Q4.225 9.15 5 9.15h2.15v-1.3H5q-.775 0-1.312-.538Q3.15 6.775 3.15 6t.538-1.313Q4.225 4.15 5 4.15h2.15v-2.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.3H10q.775 0 1.312.537.538.538.538 1.313 0 .775-.538 1.312-.537.538-1.312.538H7.85v1.3H10q.775 0 1.312.538.538.537.538 1.312t-.538 1.312q-.537.538-1.312.538H7.85v9.3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm10-.35v-8.45Q15.85 13 15 12.087q-.85-.912-.85-2.087V2.25q0-.325.213-.538.212-.212.537-.212h5.2q.325 0 .538.212.212.213.212.538V10q0 1.175-.85 2.087-.85.913-2.15 1.263v8.45h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1Zm-2.3-15.15h5.3V2.2h-5.3Z"/>
    </Icon>
  );
});

IconMaterialTapasW100Filled.displayName = 'AmauiIconMaterialTapasW100Filled';

export default IconMaterialTapasW100Filled;
