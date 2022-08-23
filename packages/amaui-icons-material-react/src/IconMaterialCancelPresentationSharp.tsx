import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCancelPresentationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationSharp'
      short_name='CancelPresentation'

      {...props}
    >
      <path d="M9.4 16 12 13.4 14.6 16 16 14.6 13.4 12 16 9.4 14.6 8 12 10.6 9.4 8 8 9.4 10.6 12 8 14.6ZM2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationSharp.displayName = 'AmauiIconMaterialCancelPresentationSharp';

export default IconMaterialCancelPresentationSharp;
