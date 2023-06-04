import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneW100'

      short_name='Done'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.55 17.1 4.8 12.35l.5-.5 4.25 4.25 9.15-9.15.5.5Z"/>
    </Icon>
  );
});

IconMaterialDoneW100.displayName = 'AmauiIconMaterialDoneW100';

export default IconMaterialDoneW100;
