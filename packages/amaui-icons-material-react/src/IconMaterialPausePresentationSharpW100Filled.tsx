import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPausePresentationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationSharpW100Filled'
      short_name='PausePresentation'

      {...props}
    >
      <path d="M10.05 15.35H10.75V8.65H10.05ZM13.25 15.35H13.95V8.65H13.25ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationSharpW100Filled.displayName = 'AmauiIconMaterialPausePresentationSharpW100Filled';

export default IconMaterialPausePresentationSharpW100Filled;
