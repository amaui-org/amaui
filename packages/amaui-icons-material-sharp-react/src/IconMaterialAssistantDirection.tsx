import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantDirection = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDirection'

      short_name='AssistantDirection'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 23q-2.275 0-4.287-.863-2.013-.862-3.5-2.349-1.488-1.488-2.35-3.5Q1 14.275 1 12q0-2.3.863-4.3.862-2 2.35-3.488 1.487-1.487 3.5-2.35Q9.725 1 12 1q2.3 0 4.3.862 2 .863 3.488 2.35Q21.275 5.7 22.138 7.7 23 9.7 23 12q0 2.275-.862 4.288-.863 2.012-2.35 3.5-1.488 1.487-3.488 2.349Q14.3 23 12 23Zm0-11Zm-.05 8.35 8.375-8.375L11.95 3.6l-8.375 8.375Zm-3.975-5.375v-5h5.15l-1.05-1.1 1.4-1.4 3.5 3.5-3.5 3.5-1.4-1.4 1.05-1.1h-3.15v3ZM12 21q3.775 0 6.387-2.613Q21 15.775 21 12q0-3.775-2.613-6.388Q15.775 3 12 3 8.225 3 5.612 5.612 3 8.225 3 12t2.612 6.387Q8.225 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialAssistantDirection.displayName = 'AmauiIconMaterialAssistantDirection';

export default IconMaterialAssistantDirection;
