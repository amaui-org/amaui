import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayDisabledSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledSharpW100Filled'
      short_name='PlayDisabled'

      {...props}
    >
      <path d="M14.9 13.05 9.3 7.45V7.35L16.6 12ZM17.05 19 12.6 14.55 9.3 16.65V11.25L4.95 6.9L5.45 6.4L17.55 18.5Z"/>
    </Icon>
  );
});

export default IconMaterialPlayDisabledSharpW100Filled;
