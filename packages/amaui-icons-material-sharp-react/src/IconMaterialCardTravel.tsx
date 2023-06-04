import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardTravel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravel'

      short_name='CardTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17v2h16v-2ZM7 6V2h10v4h5v15H2V6Zm-3 8h16V8h-3v2h-2V8H9v2H7V8H4Zm5-8h6V4H9ZM4 19V8v2-2 2-2 11Z"/>
    </Icon>
  );
});

IconMaterialCardTravel.displayName = 'AmauiIconMaterialCardTravel';

export default IconMaterialCardTravel;
