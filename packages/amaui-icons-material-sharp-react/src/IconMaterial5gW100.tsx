import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5gW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gW100'

      short_name='5g'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 16.35v-.7h5v-3.3h-5v-4.7h5.7v.7h-5v3.3h5v4.7Zm9 0v-8.7h7.7v.7h-7v7.3h6.3v-3.3h-2.5v-.7h3.2v4.7Z"/>
    </Icon>
  );
});

IconMaterial5gW100.displayName = 'AmauiIconMaterial5gW100';

export default IconMaterial5gW100;
