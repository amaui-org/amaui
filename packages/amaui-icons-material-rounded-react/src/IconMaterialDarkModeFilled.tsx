import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDarkModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeFilled'

      short_name='DarkMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-3.775 0-6.388-2.613Q3 15.775 3 12q0-3.45 2.25-5.988Q7.5 3.475 11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375Q11.1 6.7 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q.775 0 1.538-.225.762-.225 1.362-.625.525-.35 1.075-.038.55.313.475.988-.35 3.45-2.937 5.725Q15.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialDarkModeFilled.displayName = 'AmauiIconMaterialDarkModeFilled';

export default IconMaterialDarkModeFilled;
