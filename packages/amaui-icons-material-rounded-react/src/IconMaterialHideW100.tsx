import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideW100'

      short_name='Hide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.8 19.675-.5-.5 5.25-5.25H6.375v-.7h4.375V17.6h-.7v-3.175Zm8.45-8.95V6.35h.7v3.175l5.25-5.25.5.5-5.25 5.25h3.175v.7Z"/>
    </Icon>
  );
});

IconMaterialHideW100.displayName = 'AmauiIconMaterialHideW100';

export default IconMaterialHideW100;
