import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContrast = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Contrast'

      short_name='Contrast'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,22c5.52,0,10-4.48,10-10S17.52,2,12,2S2,6.48,2,12S6.48,22,12,22z M13,4.07c3.94,0.49,7,3.85,7,7.93 s-3.05,7.44-7,7.93V4.07z"/></g></g>
    </Icon>
  );
});

IconMaterialContrast.displayName = 'AmauiIconMaterialContrast';

export default IconMaterialContrast;
