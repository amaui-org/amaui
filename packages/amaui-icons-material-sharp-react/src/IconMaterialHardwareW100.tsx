import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardwareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareW100'

      short_name='Hardware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 19.7v-13H5.9q.375-1.1 1.325-1.75.95-.65 2.125-.65h4.7v2.85L16.9 4.3h.7v6.4h-.7l-2.85-2.85V19.7Zm2.7-7.7Zm-2 7h2v-6.65h-2Zm0-7.35h2V5h-4q-.65 0-1.237.25Q7.525 5.5 7.1 6h4.25Zm2 0V5v6.65Zm0 7.35v-6.65V19Z"/>
    </Icon>
  );
});

IconMaterialHardwareW100.displayName = 'AmauiIconMaterialHardwareW100';

export default IconMaterialHardwareW100;
