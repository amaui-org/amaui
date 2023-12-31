import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyVerticalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVerticalW100Filled'

      short_name='KeyVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-620q25 0 42.5-17.5T541-680q0-25-17.5-42.5T481-740q-25 0-42.5 17.5T421-680q0 25 17.5 42.5T481-620Zm0 520q-6 0-11-2t-10-7l-49-48q-4-4-6-9t-3-10q-1-5 1-10.5t5-10.5l32-42-39-55q-3-4-4.5-8t-1.5-9q0-5 1.5-9t3.5-8l27-40v-144q-48-11-84-57.5T307-680q0-74 50-124t124-50q74 0 124 50t50 124q0 64-36 110.5T535-512v357q0 6-2 11.5t-7 10.5l-24 24q-5 5-10 7t-11 2Z"/>
    </Icon>
  );
});

IconMaterialKeyVerticalW100Filled.displayName = 'AmauiIconMaterialKeyVerticalW100Filled';

export default IconMaterialKeyVerticalW100Filled;
