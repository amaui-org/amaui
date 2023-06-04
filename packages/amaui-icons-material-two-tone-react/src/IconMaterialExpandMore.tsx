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
      <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
    </Icon>
  );
});

IconMaterialExpandMore.displayName = 'AmauiIconMaterialExpandMore';

export default IconMaterialExpandMore;
