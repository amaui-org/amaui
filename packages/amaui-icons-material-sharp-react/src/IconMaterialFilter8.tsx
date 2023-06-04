import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter8 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter8'

      short_name='Filter8'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 10-1 1v4h6v-4l-1-1 1-1V5h-6v4Zm3-3v2h-2V7Zm0 4v2h-2v-2Zm-9 7V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter8.displayName = 'AmauiIconMaterialFilter8';

export default IconMaterialFilter8;
