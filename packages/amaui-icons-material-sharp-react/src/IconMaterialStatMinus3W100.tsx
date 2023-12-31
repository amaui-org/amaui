import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStatMinus3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus3W100'

      short_name='StatMinus3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-118 276-322l20-20 184 184 184-184 20 20-204 204Zm0-238L276-560l20-20 184 184 184-184 20 20-204 204Zm0-238L276-798l20-20 184 184 184-184 20 20-204 204Z"/>
    </Icon>
  );
});

IconMaterialStatMinus3W100.displayName = 'AmauiIconMaterialStatMinus3W100';

export default IconMaterialStatMinus3W100;
