import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridViewTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewTwoTone'
      short_name='GridView'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="4" opacity=".3" width="4" x="5" y="5"/><rect height="4" opacity=".3" width="4" x="5" y="15"/><rect height="4" opacity=".3" width="4" x="15" y="15"/><rect height="4" opacity=".3" width="4" x="15" y="5"/><path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z"/><path d="M3,11h8V3H3V11z M5,5h4v4H5V5z"/><path d="M13,21h8v-8h-8V21z M15,15h4v4h-4V15z"/><path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z"/></g></g>
    </Icon>
  );
});

IconMaterialGridViewTwoTone.displayName = 'AmauiIconMaterialGridViewTwoTone';

export default IconMaterialGridViewTwoTone;
