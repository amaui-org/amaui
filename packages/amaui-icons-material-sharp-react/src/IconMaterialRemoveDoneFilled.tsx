import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveDoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveDoneFilled'

      short_name='RemoveDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.825 21.8-6.6-6.6-2.85 2.85-5.65-5.65 1.4-1.45 4.25 4.25 1.4-1.4L3.425 3.45 4.825 2l18.4 18.4Zm-15.1-3.75-5.65-5.65 1.4-1.4 4.25 4.25 1.4 1.4Zm11.3-5.65-1.4-1.4 4.9-4.9 1.45 1.35Zm-2.85-2.85-1.4-1.4L15.925 6l1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialRemoveDoneFilled.displayName = 'AmauiIconMaterialRemoveDoneFilled';

export default IconMaterialRemoveDoneFilled;
