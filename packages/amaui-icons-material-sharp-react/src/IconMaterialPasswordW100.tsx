import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPasswordW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PasswordW100'

      short_name='Password'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 18.35v-.7h18.7v.7ZM3 12.4l-.6-.35 1-1.75h-2v-.7h2l-1-1.7.6-.35 1 1.7 1-1.7.6.35-1 1.7h2v.7h-2l1 1.75-.6.35-1-1.75Zm8 0-.6-.35 1-1.75h-2v-.7h2l-1-1.7.6-.35 1 1.7 1-1.7.6.35-1 1.7h2v.7h-2l1 1.75-.6.35-1-1.75Zm8 0-.6-.35 1-1.75h-2v-.7h2l-1-1.7.6-.35 1 1.7 1-1.7.6.35-1 1.7h2v.7h-2l1 1.75-.6.35-1-1.75Z"/>
    </Icon>
  );
});

IconMaterialPasswordW100.displayName = 'AmauiIconMaterialPasswordW100';

export default IconMaterialPasswordW100;
