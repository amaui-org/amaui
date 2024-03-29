import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyFilled'

      short_name='FileCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 19H8q-.825 0-1.412-.587Q6 17.825 6 17V3q0-.825.588-1.413Q7.175 1 8 1h6.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V17q0 .825-.587 1.413Q19.825 19 19 19ZM4 23q-.825 0-1.412-.587Q2 21.825 2 21V8q0-.425.288-.713Q2.575 7 3 7t.713.287Q4 7.575 4 8v13h10q.425 0 .713.288.287.287.287.712t-.287.712Q14.425 23 14 23ZM15 8h4l-5-5v4q0 .425.288.713Q14.575 8 15 8Z"/>
    </Icon>
  );
});

IconMaterialFileCopyFilled.displayName = 'AmauiIconMaterialFileCopyFilled';

export default IconMaterialFileCopyFilled;
