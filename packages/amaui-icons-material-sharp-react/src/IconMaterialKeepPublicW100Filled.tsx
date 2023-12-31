import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepPublicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepPublicW100Filled'

      short_name='KeepPublic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-170-14-14v-188H194v-28l58-58v-302h-40v-28h229q-24 32-36.5 70T392-640q0 70 36 129t98 91v48H374v188l-14 14Zm280-322q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm0-148q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T541-573q17 25 43 39t56 14Z"/>
    </Icon>
  );
});

IconMaterialKeepPublicW100Filled.displayName = 'AmauiIconMaterialKeepPublicW100Filled';

export default IconMaterialKeepPublicW100Filled;
