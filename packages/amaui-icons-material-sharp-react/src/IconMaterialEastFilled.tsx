import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastFilled'

      short_name='East'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 19-1.4-1.4 4.6-4.6H2v-2h16.2l-4.6-4.6L15 5l7 7Z"/>
    </Icon>
  );
});

IconMaterialEastFilled.displayName = 'AmauiIconMaterialEastFilled';

export default IconMaterialEastFilled;
