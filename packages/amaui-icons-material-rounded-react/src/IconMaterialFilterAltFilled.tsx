import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltFilled'

      short_name='FilterAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 13v6q0 .425-.287.712Q13.425 20 13 20h-2q-.425 0-.712-.288Q10 19.425 10 19v-6L4.2 5.6q-.375-.5-.112-1.05Q4.35 4 5 4h14q.65 0 .913.55.262.55-.113 1.05Z"/>
    </Icon>
  );
});

IconMaterialFilterAltFilled.displayName = 'AmauiIconMaterialFilterAltFilled';

export default IconMaterialFilterAltFilled;
