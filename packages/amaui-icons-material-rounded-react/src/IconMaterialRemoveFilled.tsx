import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFilled'

      short_name='Remove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 13q-.425 0-.713-.288Q5 12.425 5 12t.287-.713Q5.575 11 6 11h12q.425 0 .712.287.288.288.288.713t-.288.712Q18.425 13 18 13Z"/>
    </Icon>
  );
});

IconMaterialRemoveFilled.displayName = 'AmauiIconMaterialRemoveFilled';

export default IconMaterialRemoveFilled;
