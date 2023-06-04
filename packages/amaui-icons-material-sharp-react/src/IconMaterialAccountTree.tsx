import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountTree = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTree'

      short_name='AccountTree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 21v-3h-4V8H9v3H2V3h7v3h6V3h7v8h-7V8h-2v8h2v-3h7v8ZM4 5v4Zm13 10v4Zm0-10v4Zm0 4h3V5h-3Zm0 10h3v-4h-3ZM4 9h3V5H4Z"/>
    </Icon>
  );
});

IconMaterialAccountTree.displayName = 'AmauiIconMaterialAccountTree';

export default IconMaterialAccountTree;
