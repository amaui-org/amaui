import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPausePresentationSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationSharpW100'
      short_name='PausePresentation'

      {...props}
    >
      <path d="M10.05 15.35H10.75V8.65H10.05ZM13.25 15.35H13.95V8.65H13.25ZM3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationSharpW100.displayName = 'AmauiIconMaterialPausePresentationSharpW100';

export default IconMaterialPausePresentationSharpW100;
