import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPausePresentationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationW100'

      short_name='PausePresentation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.05 15.35h.7v-6.7h-.7Zm3.2 0h.7v-6.7h-.7ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationW100.displayName = 'AmauiIconMaterialPausePresentationW100';

export default IconMaterialPausePresentationW100;
