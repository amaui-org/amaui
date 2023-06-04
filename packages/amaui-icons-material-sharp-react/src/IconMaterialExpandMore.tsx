import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandMore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMore'

      short_name='ExpandMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialExpandMore.displayName = 'AmauiIconMaterialExpandMore';

export default IconMaterialExpandMore;
