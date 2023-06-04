import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditFilled'

      short_name='Edit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.3 8.925-4.25-4.2L17.875 1.9 22.1 6.125ZM3 21v-4.25l10.6-10.6 4.25 4.25L7.25 21Z"/>
    </Icon>
  );
});

IconMaterialEditFilled.displayName = 'AmauiIconMaterialEditFilled';

export default IconMaterialEditFilled;
