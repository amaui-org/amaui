import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppBlocking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlocking'

      short_name='AppBlocking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21h10v-1H7ZM7 4h10V3H7ZM5 23V1h14v6h-2V6H7v12h10v-1h2v6Zm13-7q-1.65 0-2.825-1.175Q14 13.65 14 12q0-1.65 1.175-2.825Q16.35 8 18 8q1.65 0 2.825 1.175Q22 10.35 22 12q0 1.65-1.175 2.825Q19.65 16 18 16Zm0-1.5q.3 0 .587-.075.288-.075.563-.225l-3.35-3.35q-.15.275-.225.562-.075.288-.075.588 0 1.05.725 1.775.725.725 1.775.725Zm2.2-1.35q.15-.275.225-.563.075-.287.075-.587 0-1.05-.725-1.775Q19.05 9.5 18 9.5q-.3 0-.587.075-.288.075-.563.225ZM7 4V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialAppBlocking.displayName = 'AmauiIconMaterialAppBlocking';

export default IconMaterialAppBlocking;
