import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthEast = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEast'

      short_name='SouthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 19q-.425 0-.712-.288Q9 18.425 9 18t.288-.712Q9.575 17 10 17h5.6L4.7 6.1q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275L17 15.6V10q0-.425.288-.713Q17.575 9 18 9t.712.287Q19 9.575 19 10v8q0 .425-.288.712Q18.425 19 18 19Z"/>
    </Icon>
  );
});

IconMaterialSouthEast.displayName = 'AmauiIconMaterialSouthEast';

export default IconMaterialSouthEast;
