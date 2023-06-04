import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantFilled'

      short_name='Assistant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 23-3-3H3V2h18v18h-6Zm1.55-10.45L17 11l-3.45-1.55L12 6l-1.55 3.45L7 11l3.45 1.55L12 16Z"/>
    </Icon>
  );
});

IconMaterialAssistantFilled.displayName = 'AmauiIconMaterialAssistantFilled';

export default IconMaterialAssistantFilled;
