import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInputSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputSharpW100'
      short_name='Input'

      {...props}
    >
      <path d="M12 15.1 11.5 14.6 13.75 12.35H3.3V11.65H13.75L11.5 9.4L12 8.9L15.1 12ZM3.3 18.7V15.35H4V18H20V6H4V8.65H3.3V5.3H20.7V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialInputSharpW100;
