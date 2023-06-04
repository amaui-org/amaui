import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelfCareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelfCareW100Filled'

      short_name='SelfCare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.6 20.2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-1.3H15.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-1.3H15.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-1.3H15.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-1.3H15.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-1.3H15.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3q.575 0 .962.512.388.513.388 1.088v7.75q0 .575-.388.962-.387.388-.962.388ZM9.05 15q1.65 0 2.825-1.625Q13.05 11.75 13.05 9.5t-1.175-3.875Q10.7 4 9.05 4 7.4 4 6.225 5.625 5.05 7.25 5.05 9.5t1.175 3.875Q7.4 15 9.05 15Zm0 5.2q-.625 0-.975-.475t-.3-1.05l.35-3.1q-1.625-.425-2.7-2.113Q4.35 11.775 4.35 9.5q0-2.575 1.375-4.388Q7.1 3.3 9.05 3.3q1.95 0 3.325 1.812Q13.75 6.925 13.75 9.5q0 2.275-1.075 3.962-1.075 1.688-2.7 2.113l.35 3.1q.075.575-.3 1.05-.375.475-.975.475Z"/>
    </Icon>
  );
});

IconMaterialSelfCareW100Filled.displayName = 'AmauiIconMaterialSelfCareW100Filled';

export default IconMaterialSelfCareW100Filled;
