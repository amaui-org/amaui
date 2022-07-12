import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChecklistSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistSharpW100'
      short_name='Checklist'

      {...props}
    >
      <path d="M13.025 8.85V8.15H20.725V8.85ZM13.025 15.85V15.15H20.725V15.85ZM5.925 10.575 3.3 7.95 3.775 7.475 5.9 9.6 10.15 5.35 10.625 5.85ZM5.925 17.575 3.3 14.95 3.775 14.475 5.9 16.6 10.15 12.35 10.625 12.85Z"/>
    </Icon>
  )
});

export default IconMaterialChecklistSharpW100;
