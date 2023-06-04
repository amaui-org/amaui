import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocationAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAltW100Filled'

      short_name='AddLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 8V5h-3v-.7h3v-3h.7v3h3V5h-3v3Zm-6 3.35q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 8.65 12 8.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm0 10.15q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q.475 0 1.013.075.537.075.987.2V6h3v3h2.275l.05.6q.025.3.025.6 0 2.225-1.812 5.087Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAltW100Filled.displayName = 'AmauiIconMaterialAddLocationAltW100Filled';

export default IconMaterialAddLocationAltW100Filled;
