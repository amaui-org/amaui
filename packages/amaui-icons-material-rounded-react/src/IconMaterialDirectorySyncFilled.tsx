import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectorySyncFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectorySyncFilled'

      short_name='DirectorySync'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-239q-43-48-67.5-110T120-480q0-150 105-255t255-105v-80l200 150-200 150v-80q-91 0-155.5 64.5T260-480q0 46 17.5 86t47.5 70l-113 85ZM480-40 280-190l200-150v80q91 0 155.5-64.5T700-480q0-46-17.5-86T635-636l113-85q43 48 67.5 110T840-480q0 150-105 255T480-120v80Z"/>
    </Icon>
  );
});

IconMaterialDirectorySyncFilled.displayName = 'AmauiIconMaterialDirectorySyncFilled';

export default IconMaterialDirectorySyncFilled;
