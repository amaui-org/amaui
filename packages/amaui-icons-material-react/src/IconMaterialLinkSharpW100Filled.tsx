import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkSharpW100Filled'
      short_name='Link'

      {...props}
    >
      <path d="M10.5 15.8H7Q5.425 15.8 4.312 14.688Q3.2 13.575 3.2 12Q3.2 10.425 4.312 9.312Q5.425 8.2 7 8.2H10.5V8.9H7Q5.725 8.9 4.812 9.812Q3.9 10.725 3.9 12Q3.9 13.275 4.812 14.188Q5.725 15.1 7 15.1H10.5ZM8.65 12.35V11.65H15.35V12.35ZM13.5 15.8V15.1H17Q18.275 15.1 19.188 14.188Q20.1 13.275 20.1 12Q20.1 10.725 19.188 9.812Q18.275 8.9 17 8.9H13.5V8.2H17Q18.575 8.2 19.688 9.312Q20.8 10.425 20.8 12Q20.8 13.575 19.688 14.688Q18.575 15.8 17 15.8Z"/>
    </Icon>
  );
});

IconMaterialLinkSharpW100Filled.displayName = 'AmauiIconMaterialLinkSharpW100Filled';

export default IconMaterialLinkSharpW100Filled;
