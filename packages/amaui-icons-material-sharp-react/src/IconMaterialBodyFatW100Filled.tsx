import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBodyFatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodyFatW100Filled'

      short_name='BodyFat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.7 15.35h-1v4.725l-16.225-8.05L18.7 3.95v4.7h1v.7H17v-.7h1V5.1l-5.15 2.55q.675.975 1.088 2.075.412 1.1.412 2.275 0 1.2-.412 2.312-.413 1.113-1.088 2.088l5.125 2.55v-3.6H17v-.7h2.7Zm-7.5.725q.65-.9 1.05-1.925t.4-2.15q0-1.1-.388-2.125-.387-1.025-1.037-1.9L4.05 12Z"/>
    </Icon>
  );
});

IconMaterialBodyFatW100Filled.displayName = 'AmauiIconMaterialBodyFatW100Filled';

export default IconMaterialBodyFatW100Filled;
