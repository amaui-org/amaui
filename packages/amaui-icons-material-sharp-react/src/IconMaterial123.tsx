import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial123 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='123'

      short_name='123'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 15v-4.5H4V9h3v6ZM9 15v-3.5h3v-1H9V9h4.5v3.5h-3v1h3V15Zm6 0v-1.5h3v-1h-2v-1h2v-1h-3V9h4.5v6Z"/>
    </Icon>
  );
});

IconMaterial123.displayName = 'AmauiIconMaterial123';

export default IconMaterial123;
