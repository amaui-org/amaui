import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPianoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoW100Filled'

      short_name='Piano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h3.775v-4.9h-1.25V5H5Zm10.225 0H19V5h-2.525v9.1h-1.25Zm-5.75 0h5.05v-4.9h-1.25V5h-2.55v9.1h-1.25Z"/>
    </Icon>
  );
});

IconMaterialPianoW100Filled.displayName = 'AmauiIconMaterialPianoW100Filled';

export default IconMaterialPianoW100Filled;
