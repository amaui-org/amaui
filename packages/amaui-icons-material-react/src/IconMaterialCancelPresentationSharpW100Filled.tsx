import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCancelPresentationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationSharpW100Filled'
      short_name='CancelPresentation'

      {...props}
    >
      <path d="M9.4 15.1 12 12.5 14.6 15.1 15.1 14.6 12.5 12 15.1 9.4 14.6 8.9 12 11.5 9.4 8.9 8.9 9.4 11.5 12 8.9 14.6ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationSharpW100Filled.displayName = 'AmauiIconMaterialCancelPresentationSharpW100Filled';

export default IconMaterialCancelPresentationSharpW100Filled;
