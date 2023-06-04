import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVignetteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteFilled'

      short_name='Vignette'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q2.45 0 4.225-1.188Q18 13.625 18 12q0-1.625-1.775-2.812Q14.45 8 12 8 9.55 8 7.775 9.188 6 10.375 6 12q0 1.625 1.775 2.812Q9.55 16 12 16ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialVignetteFilled.displayName = 'AmauiIconMaterialVignetteFilled';

export default IconMaterialVignetteFilled;
