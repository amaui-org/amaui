import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeskFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskFilled'

      short_name='Desk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18V6h20v12h-2v-2h-4v2h-2V8H4v10Zm14-8h4V8h-4Zm0 4h4v-2h-4Z"/>
    </Icon>
  );
});

IconMaterialDeskFilled.displayName = 'AmauiIconMaterialDeskFilled';

export default IconMaterialDeskFilled;
