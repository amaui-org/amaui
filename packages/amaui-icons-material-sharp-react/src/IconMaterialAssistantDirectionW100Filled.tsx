import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantDirectionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDirectionW100Filled'

      short_name='AssistantDirection'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.7q-2.025 0-3.787-.762-1.763-.763-3.075-2.075-1.313-1.313-2.076-3.076Q2.3 14.025 2.3 12t.762-3.8q.763-1.775 2.076-3.088Q6.45 3.8 8.213 3.05 9.975 2.3 12 2.3t3.8.75q1.775.75 3.088 2.062Q20.2 6.425 20.95 8.2q.75 1.775.75 3.8t-.75 3.787q-.75 1.763-2.062 3.076-1.313 1.312-3.088 2.075-1.775.762-3.8.762Zm-.05-3.35 6.375-6.375L11.95 5.6l-6.375 6.375Zm-3.325-4.025v-3.7h6.1l-1.75-1.75.5-.5 2.6 2.6-2.6 2.6-.5-.5 1.75-1.75h-5.4v3Z"/>
    </Icon>
  );
});

IconMaterialAssistantDirectionW100Filled.displayName = 'AmauiIconMaterialAssistantDirectionW100Filled';

export default IconMaterialAssistantDirectionW100Filled;
