import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTornadoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoW100'

      short_name='Tornado'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.25 4.3h17.5L12 19.4Zm1.225.7L6.6 8.65h10.8L19.525 5ZM7 9.35l2.475 4.3h5.05L17 9.35Zm2.875 5L12 18l2.125-3.65Z"/>
    </Icon>
  );
});

IconMaterialTornadoW100.displayName = 'AmauiIconMaterialTornadoW100';

export default IconMaterialTornadoW100;
