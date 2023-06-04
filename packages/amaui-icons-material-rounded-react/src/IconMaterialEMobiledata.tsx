import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledata'

      short_name='EMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17q-.425 0-.712-.288Q8 16.425 8 16V8q0-.425.288-.713Q8.575 7 9 7h6q.425 0 .713.287Q16 7.575 16 8t-.287.712Q15.425 9 15 9h-5v2h5q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 13 15 13h-5v2h5q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 17 15 17Z"/>
    </Icon>
  );
});

IconMaterialEMobiledata.displayName = 'AmauiIconMaterialEMobiledata';

export default IconMaterialEMobiledata;
