import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInFullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullFilled'

      short_name='OpenInFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20v-6q0-.425.288-.713Q3.575 13 4 13t.713.287Q5 13.575 5 14v3.6L17.6 5H14q-.425 0-.712-.288Q13 4.425 13 4t.288-.713Q13.575 3 14 3h6q.425 0 .712.287Q21 3.575 21 4v6q0 .425-.288.712Q20.425 11 20 11t-.712-.288Q19 10.425 19 10V6.4L6.4 19H10q.425 0 .713.288.287.287.287.712t-.287.712Q10.425 21 10 21Z"/>
    </Icon>
  );
});

IconMaterialOpenInFullFilled.displayName = 'AmauiIconMaterialOpenInFullFilled';

export default IconMaterialOpenInFullFilled;
