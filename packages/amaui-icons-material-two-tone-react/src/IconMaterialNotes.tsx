import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotes = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Notes'

      short_name='Notes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/>
    </Icon>
  );
});

IconMaterialNotes.displayName = 'AmauiIconMaterialNotes';

export default IconMaterialNotes;
