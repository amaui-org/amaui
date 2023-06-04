import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditNote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNote'

      short_name='EditNote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.125 15 18 12.875l1.425-1.425 2.125 2.125ZM12 21v-2.125l5.3-5.3 2.125 2.125-5.3 5.3Zm-9-5v-2h7v2Zm0-4v-2h11v2Zm0-4V6h11v2Z"/>
    </Icon>
  );
});

IconMaterialEditNote.displayName = 'AmauiIconMaterialEditNote';

export default IconMaterialEditNote;
