import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelPresentation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentation'

      short_name='CancelPresentation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.4 16 2.6-2.6 2.6 2.6 1.4-1.4-2.6-2.6L16 9.4 14.6 8 12 10.6 9.4 8 8 9.4l2.6 2.6L8 14.6ZM2 20V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentation.displayName = 'AmauiIconMaterialCancelPresentation';

export default IconMaterialCancelPresentation;
