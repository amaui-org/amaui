import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigateBeforeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBeforeW100'

      short_name='NavigateBefore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 17.1 8.9 12 14 6.9l.5.5L9.9 12l4.6 4.6Z"/>
    </Icon>
  );
});

IconMaterialNavigateBeforeW100.displayName = 'AmauiIconMaterialNavigateBeforeW100';

export default IconMaterialNavigateBeforeW100;
