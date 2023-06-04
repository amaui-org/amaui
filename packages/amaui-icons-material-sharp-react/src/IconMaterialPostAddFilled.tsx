import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPostAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddFilled'

      short_name='PostAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 11V9h8v2Zm0 3v-2h8v2Zm0 3v-2h8v2Zm9-8V7h-2V5h2V3h2v2h2v2h-2v2ZM3 21V3h11v2H5v14h14v-9h2v11Z"/>
    </Icon>
  );
});

IconMaterialPostAddFilled.displayName = 'AmauiIconMaterialPostAddFilled';

export default IconMaterialPostAddFilled;
