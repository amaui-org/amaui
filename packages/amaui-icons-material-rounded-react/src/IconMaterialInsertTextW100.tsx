import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertTextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertTextW100'

      short_name='InsertText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16V8.7h-3V8h6.7v.7h-3V16ZM2.8 21.2v-3.7h1.5v-11H2.8V2.8h3.7v1.5h11V2.8h3.7v3.7h-1.5v11h1.5v3.7h-3.7v-1.5h-11v1.5ZM6.5 19h11v-1.5H19v-11h-1.5V5h-11v1.5H5v11h1.5Zm-3-13.2h2.3V3.5H3.5Zm14.7 0h2.3V3.5h-2.3Zm0 14.7h2.3v-2.3h-2.3Zm-14.7 0h2.3v-2.3H3.5ZM18.2 5.8Zm0 12.4Zm-12.4 0Zm0-12.4Z"/>
    </Icon>
  );
});

IconMaterialInsertTextW100.displayName = 'AmauiIconMaterialInsertTextW100';

export default IconMaterialInsertTextW100;
