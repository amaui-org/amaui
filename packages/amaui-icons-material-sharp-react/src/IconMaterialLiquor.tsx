import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiquor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Liquor'

      short_name='Liquor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22v-2h2v-3.2q-.875-.3-1.438-1.062Q3 14.975 3 14V6h6v8q0 .975-.562 1.738Q7.875 16.5 7 16.8V20h2v2Zm2-11h2V8H5Zm1 4q.425 0 .713-.288Q7 14.425 7 14v-1H5v1q0 .425.287.712Q5.575 15 6 15Zm5 7V9.05l3-1.1V2h5v5.95l3 1.1V22Zm5-17h1V4h-1Zm-3 7h7v-1.55l-3-1.1V7h-1v2.35l-3 1.1Zm0 8h7v-2h-7Zm0-4h7v-2h-7Zm-7-1Zm7 1v-2 2Z"/>
    </Icon>
  );
});

IconMaterialLiquor.displayName = 'AmauiIconMaterialLiquor';

export default IconMaterialLiquor;
