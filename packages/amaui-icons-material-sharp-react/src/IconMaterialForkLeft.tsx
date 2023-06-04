import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForkLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkLeft'

      short_name='ForkLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 21v-4q-.45-1.6-1.587-2.363-1.138-.762-2.488-.762-.275 0-.55.037-.275.038-.55.088L9.4 15.6 8 17l-4-4 4-4 1.4 1.4L7.825 12q.225-.05.475-.075.25-.025.525-.025 1.1 0 2.2.337 1.1.338 1.975 1.113V6.825l-1.6 1.6L10 7l4-4 4 4-1.4 1.4L15 6.825V21Z"/>
    </Icon>
  );
});

IconMaterialForkLeft.displayName = 'AmauiIconMaterialForkLeft';

export default IconMaterialForkLeft;
