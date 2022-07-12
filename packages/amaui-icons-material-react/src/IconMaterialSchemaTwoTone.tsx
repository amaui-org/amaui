import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchemaTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaTwoTone'
      short_name='Schema'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M6,3h3v2H6V3z M9,21H6v-2h3V21z M9,13H6v-2h3V13z M19,13h-3v-2h3V13z" opacity=".3"/><path d="M14,9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9H14z M6,3h3v2H6V3z M9,21H6v-2h3V21z M9,13H6v-2 h3V13z M19,13h-3v-2h3V13z"/>
    </Icon>
  )
});

export default IconMaterialSchemaTwoTone;
