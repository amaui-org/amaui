import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantSharpW700'
      short_name='Assistant'

      {...props}
    >
      <path d="M12 23.775 8.65 20.425H2.15V0.725H21.85V20.425H15.35ZM5.3 17.275H9.95L12 19.325L14.05 17.275H18.7V3.875H5.3ZM5.3 3.875V17.275ZM13.55 12.125 17 10.575 13.55 9.025 12 5.575 10.45 9.025 7 10.575 10.45 12.125 12 15.575Z"/>
    </Icon>
  )
});

export default IconMaterialAssistantSharpW700;
