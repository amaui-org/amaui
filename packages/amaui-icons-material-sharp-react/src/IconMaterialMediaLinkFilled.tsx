import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaLinkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaLinkFilled'

      short_name='MediaLink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.5 19.5 4-2.5-4-2.5ZM13 7.75h4v-1.5h-4ZM1 23V11h16v12Zm17.5-9V9.6q.675-.4 1.087-1.088Q20 7.825 20 7q0-1.25-.875-2.125T17 4h-1.25v1.5H17q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q17.625 8.5 17 8.5h-1.25v1h-1.5v-1H13q-.625 0-1.062-.438Q11.5 7.625 11.5 7t.438-1.062Q12.375 5.5 13 5.5h1.25V4H13q-1.25 0-2.125.875T10 7q0 .8.375 1.438.375.637.975 1.062H7V1h16v13Z"/>
    </Icon>
  );
});

IconMaterialMediaLinkFilled.displayName = 'AmauiIconMaterialMediaLinkFilled';

export default IconMaterialMediaLinkFilled;
