import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStatMinus2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus2W100'

      short_name='StatMinus2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-238 276-442l20-20 184 184 184-184 20 20-204 204Zm0-238L276-680l20-20 184 184 184-184 20 20-204 204Z"/>
    </Icon>
  );
});

IconMaterialStatMinus2W100.displayName = 'AmauiIconMaterialStatMinus2W100';

export default IconMaterialStatMinus2W100;
