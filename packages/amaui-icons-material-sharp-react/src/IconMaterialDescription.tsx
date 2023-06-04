import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDescription = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Description'

      short_name='Description'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 18h8v-2H8Zm0-4h8v-2H8Zm-4 8V2h10l6 6v14Zm9-13V4H6v16h12V9ZM6 4v5-5 16Z"/>
    </Icon>
  );
});

IconMaterialDescription.displayName = 'AmauiIconMaterialDescription';

export default IconMaterialDescription;
