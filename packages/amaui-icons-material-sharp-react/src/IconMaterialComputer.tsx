import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComputer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Computer'

      short_name='Computer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18V3h20v15Zm2-2h16V5H4Zm-3 5v-2h22v2Zm3-5V5v11Z"/>
    </Icon>
  );
});

IconMaterialComputer.displayName = 'AmauiIconMaterialComputer';

export default IconMaterialComputer;
