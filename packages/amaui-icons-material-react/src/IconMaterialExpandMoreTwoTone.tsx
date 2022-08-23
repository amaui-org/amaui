import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandMoreTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreTwoTone'
      short_name='ExpandMore'

      {...props}
    >
      <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
    </Icon>
  );
});

IconMaterialExpandMoreTwoTone.displayName = 'AmauiIconMaterialExpandMoreTwoTone';

export default IconMaterialExpandMoreTwoTone;
