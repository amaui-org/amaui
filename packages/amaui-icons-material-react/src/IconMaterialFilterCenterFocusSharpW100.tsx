import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterCenterFocusSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterCenterFocusSharpW100'
      short_name='FilterCenterFocus'

      {...props}
    >
      <path d="M12 13.7Q11.275 13.7 10.788 13.212Q10.3 12.725 10.3 12Q10.3 11.275 10.788 10.787Q11.275 10.3 12 10.3Q12.725 10.3 13.213 10.787Q13.7 11.275 13.7 12Q13.7 12.725 13.213 13.212Q12.725 13.7 12 13.7ZM4.3 9V4.3H9V5H5V9ZM9 19.7H4.3V15H5V19H9ZM15 19.7V19H19V15H19.7V19.7ZM19 9V5H15V4.3H19.7V9Z"/>
    </Icon>
  );
});

IconMaterialFilterCenterFocusSharpW100.displayName = 'AmauiIconMaterialFilterCenterFocusSharpW100';

export default IconMaterialFilterCenterFocusSharpW100;
