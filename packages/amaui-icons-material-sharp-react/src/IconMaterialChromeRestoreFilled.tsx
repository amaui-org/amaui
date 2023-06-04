import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeRestoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeRestoreFilled'

      short_name='ChromeRestore'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 736V256h480v480H320ZM160 896V437h80v379h379v80H160Z"/>
    </Icon>
  );
});

IconMaterialChromeRestoreFilled.displayName = 'AmauiIconMaterialChromeRestoreFilled';

export default IconMaterialChromeRestoreFilled;
