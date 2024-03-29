import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddBusinessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBusinessFilled'

      short_name='AddBusiness'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 23v-3h-3v-2h3v-3h2v3h3v2h-3v3ZM2 20v-6H1v-2l1-5h15l1 5v2h-1v3h-2v-3h-4v6Zm2-2h5v-4H4ZM2 6V4h15v2Z"/>
    </Icon>
  );
});

IconMaterialAddBusinessFilled.displayName = 'AmauiIconMaterialAddBusinessFilled';

export default IconMaterialAddBusinessFilled;
