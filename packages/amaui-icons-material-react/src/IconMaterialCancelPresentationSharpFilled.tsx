import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCancelPresentationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationSharpFilled'
      short_name='CancelPresentation'

      {...props}
    >
      <path d="M9.4 16 12 13.4 14.6 16 16 14.6 13.4 12 16 9.4 14.6 8 12 10.6 9.4 8 8 9.4 10.6 12 8 14.6ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

export default IconMaterialCancelPresentationSharpFilled;
