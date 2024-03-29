import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantNavigationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantNavigationFilled'

      short_name='AssistantNavigation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.7 16.625 3.075-1.35q.125-.05.237-.05.113 0 .238.05l3.05 1.35q.35.15.625-.113.275-.262.125-.612l-3.525-8.6q-.15-.35-.525-.35t-.525.35L7.95 15.9q-.15.35.125.612.275.263.625.113ZM12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22t-3.9-.788q-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2Z"/>
    </Icon>
  );
});

IconMaterialAssistantNavigationFilled.displayName = 'AmauiIconMaterialAssistantNavigationFilled';

export default IconMaterialAssistantNavigationFilled;
