import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenuOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenW100'

      short_name='MenuOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.775 17.05v-.7h11.7v.7Zm15.95-.95-4.1-4.1 4.1-4.1.5.5-3.6 3.6 3.6 3.6Zm-15.95-3.75v-.7h8.7v.7Zm0-4.7v-.7h11.7v.7Z"/>
    </Icon>
  );
});

IconMaterialMenuOpenW100.displayName = 'AmauiIconMaterialMenuOpenW100';

export default IconMaterialMenuOpenW100;
