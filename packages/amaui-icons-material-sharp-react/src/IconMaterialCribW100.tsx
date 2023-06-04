import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCribW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribW100'

      short_name='Crib'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14h12v-3.5h-7.75V6H8q-.825 0-1.412.588Q6 7.175 6 8Zm6 4.9q.7 0 1.35-.1.65-.1 1.3-.3v-3.8h-5.3v3.8q.65.2 1.3.3.65.1 1.35.1Zm0 .7q-1.7 0-3.275-.6t-2.85-1.7l.5-.5q.5.45 1.075.8.575.35 1.2.625V14.7H5.3V8q0-1.125.788-1.912Q6.875 5.3 8 5.3h2.95v4.5h7.75v4.9h-3.35v3.525q.625-.275 1.2-.625t1.075-.8l.5.5q-1.275 1.1-2.85 1.7-1.575.6-3.275.6Zm0-9.6Z"/>
    </Icon>
  );
});

IconMaterialCribW100.displayName = 'AmauiIconMaterialCribW100';

export default IconMaterialCribW100;
