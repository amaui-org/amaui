import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial123W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='123W100'

      short_name='123'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14.6v-4.5H4.5v-.7h2.2v5.2Zm3.35 0v-2.95h3.05V10.1H9.35v-.7h3.75v2.95h-3.05v1.55h3.05v.7Zm5.9 0v-.7h3.05v-1.55h-2.05v-.7h2.05V10.1h-3.05v-.7H19v5.2Z"/>
    </Icon>
  );
});

IconMaterial123W100.displayName = 'AmauiIconMaterial123W100';

export default IconMaterial123W100;
