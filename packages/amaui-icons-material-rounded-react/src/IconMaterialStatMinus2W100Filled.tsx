import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStatMinus2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus2W100Filled'

      short_name='StatMinus2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-278 174-174q4-4 9.5-4.5T674-452q5 5 5 10t-5 10L501-259q-9 9-21 9t-21-9L286-432q-4-4-4.5-9.5T286-452q5-5 10-5t10 5l174 174Zm0-238 174-174q4-4 9.5-4.5T674-690q5 5 5 10t-5 10L501-497q-9 9-21 9t-21-9L286-670q-4-4-4.5-9.5T286-690q5-5 10-5t10 5l174 174Z"/>
    </Icon>
  );
});

IconMaterialStatMinus2W100Filled.displayName = 'AmauiIconMaterialStatMinus2W100Filled';

export default IconMaterialStatMinus2W100Filled;
