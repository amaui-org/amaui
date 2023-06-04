import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigateNextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextW100'

      short_name='NavigateNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.4 17.1-.5-.5 4.6-4.6-4.6-4.6.5-.5 5.1 5.1Z"/>
    </Icon>
  );
});

IconMaterialNavigateNextW100.displayName = 'AmauiIconMaterialNavigateNextW100';

export default IconMaterialNavigateNextW100;
