import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOff'

      short_name='HdrOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.5 15-.9-2h-1.1v1.65l-1.5-1.5V9h5v3.9h-.9L21 15Zm-2-3.5h2v-1h-2Zm2.3 11.1L1.4 4.2l1.4-1.4 18.4 18.35Zm-5.3-10.95L11.85 9H13q.6 0 1.05.45.45.45.45 1.05ZM3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15Zm6.5-4.1 1.5 1.5v1.1h1.125l1.375 1.4q-.125.05-.25.075Q13.125 15 13 15H9.5Z"/>
    </Icon>
  );
});

IconMaterialHdrOff.displayName = 'AmauiIconMaterialHdrOff';

export default IconMaterialHdrOff;
