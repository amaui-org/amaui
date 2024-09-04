import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscape2OffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape2OffW100Filled'

      short_name='Landscape2Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M823-97 98-822l20-20 725 725-20 20ZM247-565q-38 0-65.5-27T154-657q0-31 17.5-54.5T216-744l117 117q-9 27-32.5 44.5T247-565Zm618 358L470-602l10-30q12-37 44-58.5t70-21.5q38 0 70 21t44 57l157 427Zm-767-5 108-204q8-15 22-23.5t31-8.5q18 0 33 9.5t22 26.5l19 44q9 19 33 17.5t31-20.5l47-145 304 304H98Z"/>
    </Icon>
  );
});

IconMaterialLandscape2OffW100Filled.displayName = 'AmauiIconMaterialLandscape2OffW100Filled';

export default IconMaterialLandscape2OffW100Filled;
