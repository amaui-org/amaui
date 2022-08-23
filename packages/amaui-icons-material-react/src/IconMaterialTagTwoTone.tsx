import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTagTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TagTwoTone'
      short_name='Tag'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M20,10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4H20z M14,14h-4v-4h4V14z"/></g>
    </Icon>
  );
});

IconMaterialTagTwoTone.displayName = 'AmauiIconMaterialTagTwoTone';

export default IconMaterialTagTwoTone;
