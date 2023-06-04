import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBar'

      short_name='SpaceBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 15q-.425 0-.713-.288Q4 14.425 4 14v-4q0-.425.287-.713Q4.575 9 5 9t.713.287Q6 9.575 6 10v3h12v-3q0-.425.288-.713Q18.575 9 19 9t.712.287Q20 9.575 20 10v4q0 .425-.288.712Q19.425 15 19 15Z"/>
    </Icon>
  );
});

IconMaterialSpaceBar.displayName = 'AmauiIconMaterialSpaceBar';

export default IconMaterialSpaceBar;
