import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAlt'

      short_name='FilterAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 13v6q0 .425-.287.712Q13.425 20 13 20h-2q-.425 0-.712-.288Q10 19.425 10 19v-6L4.2 5.6q-.375-.5-.112-1.05Q4.35 4 5 4h14q.65 0 .913.55.262.55-.113 1.05Zm-2-.7L16.95 6h-9.9Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialFilterAlt.displayName = 'AmauiIconMaterialFilterAlt';

export default IconMaterialFilterAlt;
