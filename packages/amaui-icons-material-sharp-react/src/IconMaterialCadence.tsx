import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCadence = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cadence'

      short_name='Cadence'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-560h80v560h-80ZM280-240v-320h80v320h-80Zm320 0v-320h80v320h-80ZM120-360v-80h80v80h-80Zm640 0v-80h80v80h-80ZM80-560v-80h47q42 0 78.5-21t58.5-57q34-57 91.5-89.5T480-840q67 0 124.5 32.5T696-718q22 36 58.5 57t78.5 21h47v80h-46q-63 0-118.5-31T628-676q-23-39-62.5-61.5T480-760q-45 0-84.5 22.5T333-676q-32 54-87.5 85T127-560H80Z"/>
    </Icon>
  );
});

IconMaterialCadence.displayName = 'AmauiIconMaterialCadence';

export default IconMaterialCadence;
