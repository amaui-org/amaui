import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialColorizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeW100'

      short_name='Colorize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.45 19.7v-2.9L13 8.25 11.1 6.4l.5-.5L14 8.25l3.875-3.875 1.9 1.9L15.85 10.2l2.4 2.4-.5.5-1.9-1.9-8.5 8.5Zm.7-.7H7.1l8.3-8.35-1.9-1.9-8.35 8.3ZM15.4 9.65l3.375-3.375-.9-.9L14.5 8.75Zm0 0-.9-.9.9.9Z"/>
    </Icon>
  );
});

IconMaterialColorizeW100.displayName = 'AmauiIconMaterialColorizeW100';

export default IconMaterialColorizeW100;
