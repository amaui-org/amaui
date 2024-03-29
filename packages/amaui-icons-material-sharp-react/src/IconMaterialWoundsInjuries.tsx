import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWoundsInjuries = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WoundsInjuries'

      short_name='WoundsInjuries'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 22 2 20.6l2.2-2.2-2.2-.6.525-1.925 2.175.6-.575-2.2 1.925-.525.6 2.2 3.425-3.425-2.2-.6L8.4 10l2.175.575L10 8.4l1.925-.525.6 2.2L15.95 6.65l-2.2-.6.525-1.925 2.2.575-.6-2.175L17.8 2l.6 2.2L20.6 2 22 3.4l-2.2 2.2 2.2.6-.525 1.925-2.175-.6.575 2.2-1.925.525-.6-2.2-3.425 3.425 2.2.6L15.6 14l-2.175-.575L14 15.6l-1.925.525-.6-2.2L8.05 17.35l2.2.6-.525 1.925-2.2-.575.6 2.175L6.2 22l-.6-2.2Z"/>
    </Icon>
  );
});

IconMaterialWoundsInjuries.displayName = 'AmauiIconMaterialWoundsInjuries';

export default IconMaterialWoundsInjuries;
