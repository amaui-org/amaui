import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCenterFocusStrongSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusStrongSharp'
      short_name='CenterFocusStrong'

      {...props}
    >
      <path d="M12 17Q9.925 17 8.463 15.537Q7 14.075 7 12Q7 9.925 8.463 8.462Q9.925 7 12 7Q14.075 7 15.538 8.462Q17 9.925 17 12Q17 14.075 15.538 15.537Q14.075 17 12 17ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 15Q13.25 15 14.125 14.125Q15 13.25 15 12Q15 10.75 14.125 9.875Q13.25 9 12 9Q10.75 9 9.875 9.875Q9 10.75 9 12Q9 13.25 9.875 14.125Q10.75 15 12 15ZM3 9V3H9V5H5V9ZM9 21H3V15H5V19H9ZM15 21V19H19V15H21V21ZM19 9V5H15V3H21V9Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusStrongSharp.displayName = 'AmauiIconMaterialCenterFocusStrongSharp';

export default IconMaterialCenterFocusStrongSharp;
