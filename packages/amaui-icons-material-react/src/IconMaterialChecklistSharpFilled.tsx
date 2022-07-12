import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChecklistSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistSharpFilled'
      short_name='Checklist'

      {...props}
    >
      <path d="M13 9V7H22V9ZM13 17V15H22V17ZM5.55 11 2 7.45 3.4 6.05 5.525 8.175 9.775 3.925 11.175 5.35ZM5.55 19 2 15.45 3.4 14.05 5.525 16.175 9.775 11.925 11.175 13.35Z"/>
    </Icon>
  )
});

export default IconMaterialChecklistSharpFilled;
