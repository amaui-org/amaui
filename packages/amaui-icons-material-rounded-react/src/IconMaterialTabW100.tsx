import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabW100'

      short_name='Tab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425ZM13 8.5V6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2V10h-5.5q-.625 0-1.062-.438Q13 9.125 13 8.5Zm-9 8.7V6h.8q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18H4V17.2Z"/>
    </Icon>
  );
});

IconMaterialTabW100.displayName = 'AmauiIconMaterialTabW100';

export default IconMaterialTabW100;
