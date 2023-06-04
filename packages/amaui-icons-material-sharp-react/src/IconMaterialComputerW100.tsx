import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComputerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerW100'

      short_name='Computer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 17.3V4.9h17.4v12.4Zm.7-.7h16v-11H4ZM2 19v-.7h20v.7Zm2-2.4v-11 11Z"/>
    </Icon>
  );
});

IconMaterialComputerW100.displayName = 'AmauiIconMaterialComputerW100';

export default IconMaterialComputerW100;
