import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCorporateFareTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CorporateFareTwoTone'
      short_name='CorporateFare'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M10,19H4v-2h6V19z M10,15H4v-2h6V15z M10,11H4V9h6V11z M10,7H4V5h6V7z M20,19h-8V9h8V19z M18,11h-4v2h4V11z M18,15h-4v2h4V15z" opacity=".3"/><path d="M12,7V3H2v18h20V7H12z M10,19H4v-2h6V19z M10,15H4v-2h6V15z M10,11H4V9h6V11z M10,7H4V5h6V7z M20,19h-8V9h8V19z M18,11h-4v2 h4V11z M18,15h-4v2h4V15z"/>
    </Icon>
  );
});

export default IconMaterialCorporateFareTwoTone;
