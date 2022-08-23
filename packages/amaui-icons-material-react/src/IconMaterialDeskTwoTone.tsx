import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeskTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskTwoTone'
      short_name='Desk'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" opacity=".3" width="4" x="16" y="8"/><rect height="2" opacity=".3" width="4" x="16" y="12"/><path d="M2,6v12h2V8h10v10h2v-2h4v2h2V6H2z M20,14h-4v-2h4V14z M20,10h-4V8h4V10z"/></g></g>
    </Icon>
  );
});

IconMaterialDeskTwoTone.displayName = 'AmauiIconMaterialDeskTwoTone';

export default IconMaterialDeskTwoTone;
