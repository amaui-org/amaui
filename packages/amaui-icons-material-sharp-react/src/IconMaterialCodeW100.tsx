import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeW100'

      short_name='Code'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17.1 2.9 12 8 6.9l.5.5L3.9 12l4.6 4.6Zm8 0-.5-.5 4.6-4.6-4.6-4.6.5-.5 5.1 5.1Z"/>
    </Icon>
  );
});

IconMaterialCodeW100.displayName = 'AmauiIconMaterialCodeW100';

export default IconMaterialCodeW100;
