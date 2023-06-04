import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletMac = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMac'

      short_name='TabletMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 23V1h18v22Zm2-7h14V6H5Zm0 5h14v-3H5ZM5 4h14V3H5Zm7 16.5q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q12.425 18.5 12 18.5t-.712.288Q11 19.075 11 19.5t.288.712q.287.288.712.288ZM5 4V3v1Zm0 17v-3 3Z"/>
    </Icon>
  );
});

IconMaterialTabletMac.displayName = 'AmauiIconMaterialTabletMac';

export default IconMaterialTabletMac;
