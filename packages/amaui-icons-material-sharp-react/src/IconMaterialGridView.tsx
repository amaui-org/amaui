import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridView = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridView'

      short_name='GridView'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 11V3h8v8Zm0 10v-8h8v8Zm10-10V3h8v8Zm0 10v-8h8v8ZM5 9h4V5H5Zm10 0h4V5h-4Zm0 10h4v-4h-4ZM5 19h4v-4H5ZM15 9Zm0 6Zm-6 0Zm0-6Z"/>
    </Icon>
  );
});

IconMaterialGridView.displayName = 'AmauiIconMaterialGridView';

export default IconMaterialGridView;
