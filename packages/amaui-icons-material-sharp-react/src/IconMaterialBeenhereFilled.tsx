import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeenhereFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereFilled'

      short_name='Beenhere'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 23-8-6V2h16v15Zm-1.05-8 5.65-5.65-1.4-1.45-4.25 4.25-2.1-2.1-1.45 1.4Z"/>
    </Icon>
  );
});

IconMaterialBeenhereFilled.displayName = 'AmauiIconMaterialBeenhereFilled';

export default IconMaterialBeenhereFilled;
