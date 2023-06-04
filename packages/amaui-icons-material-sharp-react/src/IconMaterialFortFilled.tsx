import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFortFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortFilled'

      short_name='Fort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 21v-4l2-2V9L1 7V3h2v2h2V3h2v2h2V3h2v4L9 9v1h6V9l-2-2V3h2v2h2V3h2v2h2V3h2v4l-2 2v6l2 2v4h-9v-5h-4v5Z"/>
    </Icon>
  );
});

IconMaterialFortFilled.displayName = 'AmauiIconMaterialFortFilled';

export default IconMaterialFortFilled;
