import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowOutwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardW100'

      short_name='ArrowOutward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.4 17.075-.475-.475L16.15 6.35h-9.5v-.7h10.7v10.7h-.7v-9.5Z"/>
    </Icon>
  );
});

IconMaterialArrowOutwardW100.displayName = 'AmauiIconMaterialArrowOutwardW100';

export default IconMaterialArrowOutwardW100;
