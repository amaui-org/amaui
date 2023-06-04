import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Add'

      short_name='Add'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/>
    </Icon>
  );
});

IconMaterialAdd.displayName = 'AmauiIconMaterialAdd';

export default IconMaterialAdd;
