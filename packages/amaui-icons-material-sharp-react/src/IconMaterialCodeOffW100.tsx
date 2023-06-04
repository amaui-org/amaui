import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffW100'

      short_name='CodeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 7.45 8.45 3.9 12l4.6 4.6-.5.5L2.9 12l4.05-4.05-3.8-3.8.5-.5 16.7 16.7Zm-1.9-5.7-.5-.5L20.1 12l-4.6-4.6.5-.5 5.1 5.1Z"/>
    </Icon>
  );
});

IconMaterialCodeOffW100.displayName = 'AmauiIconMaterialCodeOffW100';

export default IconMaterialCodeOffW100;
