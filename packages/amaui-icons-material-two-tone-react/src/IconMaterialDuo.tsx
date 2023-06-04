import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDuo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Duo'

      short_name='Duo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2h-8C6.38 2 2 6.66 2 12.28 2 17.5 6.49 22 11.72 22 17.39 22 22 17.62 22 12V4c0-1.1-.9-2-2-2zm-3 13l-3-2v2H7V9h7v2l3-2v6z"/>
    </Icon>
  );
});

IconMaterialDuo.displayName = 'AmauiIconMaterialDuo';

export default IconMaterialDuo;
