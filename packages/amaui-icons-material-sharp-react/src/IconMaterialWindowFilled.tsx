import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowFilled'

      short_name='Window'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11H2V2h9Zm2 0V2h9v9Zm-2 2v9H2v-9Zm11 9h-9v-9h9Z"/>
    </Icon>
  );
});

IconMaterialWindowFilled.displayName = 'AmauiIconMaterialWindowFilled';

export default IconMaterialWindowFilled;
