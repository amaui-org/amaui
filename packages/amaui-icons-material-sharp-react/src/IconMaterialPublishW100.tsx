import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublishW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishW100'

      short_name='Publish'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 18.7V9.9L9.4 12.15l-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.25-2.25v8.8ZM5.3 8.55v-3.7h13.4v3.7H18v-3H6v3Z"/>
    </Icon>
  );
});

IconMaterialPublishW100.displayName = 'AmauiIconMaterialPublishW100';

export default IconMaterialPublishW100;
