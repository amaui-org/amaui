import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScienceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceFilled'

      short_name='Science'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-1.275 0-1.812-1.137-.538-1.138.262-2.113L9 11V5H8q-.425 0-.713-.288Q7 4.425 7 4t.287-.713Q7.575 3 8 3h8q.425 0 .712.287Q17 3.575 17 4t-.288.712Q16.425 5 16 5h-1v6l5.55 6.75q.8.975.262 2.113Q20.275 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialScienceFilled.displayName = 'AmauiIconMaterialScienceFilled';

export default IconMaterialScienceFilled;
