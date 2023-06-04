import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDifferenceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceFilled'

      short_name='Difference'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.5 11h2V9h2V7h-2V5h-2v2h-2v2h2Zm-2 4h6v-2h-6ZM6 19V1h9l6 6v12Zm-4 4V7h2v14h11v2Z"/>
    </Icon>
  );
});

IconMaterialDifferenceFilled.displayName = 'AmauiIconMaterialDifferenceFilled';

export default IconMaterialDifferenceFilled;
