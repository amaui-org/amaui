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
      <path d="M7.15 22.5v-9.65H5q-.775 0-1.312-.538Q3.15 11.775 3.15 11t.538-1.312Q4.225 9.15 5 9.15h2.15v-1.3H5q-.775 0-1.312-.538Q3.15 6.775 3.15 6t.538-1.313Q4.225 4.15 5 4.15h2.15V1.5h.7v2.65H10q.775 0 1.312.537.538.538.538 1.313 0 .775-.538 1.312-.537.538-1.312.538H7.85v1.3H10q.775 0 1.312.538.538.537.538 1.312t-.538 1.312q-.537.538-1.312.538H7.85v9.65Zm8 0v-.7h2v-8.45Q15.85 13 15 12.087q-.85-.912-.85-2.087V1.5h6.7V10q0 1.175-.85 2.087-.85.913-2.15 1.263v8.45h2v.7Zm-.3-15.85h5.3V2.2h-5.3Z"/>
    </Icon>
  );
});

IconMaterialTapasW100Filled.displayName = 'AmauiIconMaterialTapasW100Filled';

export default IconMaterialTapasW100Filled;
