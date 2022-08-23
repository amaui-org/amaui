import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantSharpW100Filled'
      short_name='Assistant'

      {...props}
    >
      <path d="M12 21.15 9.55 18.7H4.3V3.3H19.7V18.7H14.45ZM13.075 12.075 15.4 11 13.075 9.925 12 7.6 10.925 9.925 8.6 11 10.925 12.075 12 14.4Z"/>
    </Icon>
  );
});

IconMaterialAssistantSharpW100Filled.displayName = 'AmauiIconMaterialAssistantSharpW100Filled';

export default IconMaterialAssistantSharpW100Filled;
