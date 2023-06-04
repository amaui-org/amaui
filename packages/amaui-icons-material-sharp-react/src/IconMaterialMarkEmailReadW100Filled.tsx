import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailReadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadW100Filled'

      short_name='MarkEmailRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 21.05 12 17.7l.5-.5 2.85 2.85 5.7-5.7.5.5ZM12 11.85l8-5.3-.4-.55-7.6 5-7.6-5-.4.55ZM3.3 18.7V5.3h17.4v6.6l-5.35 5.325-2.85-2.85L9.175 17.7l1 1Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadW100Filled.displayName = 'AmauiIconMaterialMarkEmailReadW100Filled';

export default IconMaterialMarkEmailReadW100Filled;
