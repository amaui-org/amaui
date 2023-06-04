import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDangerousW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousW100'

      short_name='Dangerous'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.8 19.7-4.5-4.5V8.8l4.5-4.5h6.4l4.5 4.5v6.4l-4.5 4.5Zm.35-4.35L12 12.5l2.85 2.85.5-.5L12.5 12l2.85-2.85-.5-.5L12 11.5 9.15 8.65l-.5.5L11.5 12l-2.85 2.85ZM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8Zm2.9-7Z"/>
    </Icon>
  );
});

IconMaterialDangerousW100.displayName = 'AmauiIconMaterialDangerousW100';

export default IconMaterialDangerousW100;
