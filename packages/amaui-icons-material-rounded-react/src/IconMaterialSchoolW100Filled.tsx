import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchoolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolW100Filled'

      short_name='School'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.95 14.9q-.15 0-.25-.1t-.1-.25V9.4l-6.875 3.725q-.175.1-.35.137-.175.038-.375.038t-.375-.038q-.175-.037-.35-.137L4.925 9.65q-.2-.1-.287-.275Q4.55 9.2 4.525 9q0-.2.1-.375t.3-.275l6.35-3.45q.175-.1.35-.15.175-.05.375-.05t.375.05q.175.05.35.15L19.9 8.775q.2.125.3.3.1.175.1.375v5.1q0 .15-.1.25t-.25.1ZM12 17.8q-.2 0-.375-.05t-.35-.15l-4.2-2.275q-.35-.2-.562-.55Q6.3 14.425 6.3 14v-2.9l4.675 2.55q.25.125.5.212.25.088.525.088t.525-.088q.25-.087.5-.212L17.7 11.1V14q0 .425-.212.775-.213.35-.563.55l-4.2 2.275q-.175.1-.35.15-.175.05-.375.05Z"/>
    </Icon>
  );
});

IconMaterialSchoolW100Filled.displayName = 'AmauiIconMaterialSchoolW100Filled';

export default IconMaterialSchoolW100Filled;
