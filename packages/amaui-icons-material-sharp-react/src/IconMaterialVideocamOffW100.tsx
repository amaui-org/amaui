import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffW100'

      short_name='VideocamOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.15 15.25 17.4 12.5v2.25l-.7-.7V6H8.65l-.7-.7h9.45v6.2l2.75-2.75Zm-7.425-5.175Zm-2 1.825Zm8.325 8.35L2.95 4.15l.5-.5 16.1 16.1ZM5.1 5.3l.7.7H4.7v12h12v-1.1l.7.7v1.1H4V5.3Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffW100.displayName = 'AmauiIconMaterialVideocamOffW100';

export default IconMaterialVideocamOffW100;
