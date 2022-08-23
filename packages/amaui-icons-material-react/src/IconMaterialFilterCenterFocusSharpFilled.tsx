import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterCenterFocusSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterCenterFocusSharpFilled'
      short_name='FilterCenterFocus'

      {...props}
    >
      <path d="M12 15Q10.75 15 9.875 14.125Q9 13.25 9 12Q9 10.75 9.875 9.875Q10.75 9 12 9Q13.25 9 14.125 9.875Q15 10.75 15 12Q15 13.25 14.125 14.125Q13.25 15 12 15ZM3 9V3H9V5H5V9ZM9 21H3V15H5V19H9ZM15 21V19H19V15H21V21ZM19 9V5H15V3H21V9Z"/>
    </Icon>
  );
});

IconMaterialFilterCenterFocusSharpFilled.displayName = 'AmauiIconMaterialFilterCenterFocusSharpFilled';

export default IconMaterialFilterCenterFocusSharpFilled;
