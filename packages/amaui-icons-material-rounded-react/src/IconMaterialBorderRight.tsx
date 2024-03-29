import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderRight'

      short_name='BorderRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 9V7h2v2Zm8 0V7h2v2Zm0 4v-2h2v2Zm-8 0v-2h2v2Zm4-8V3h2v2ZM3 5V3h2v2Zm8 0V3h2v2Zm4 0V3h2v2Zm-8 8v-2h2v2Zm8 8v-2h2v2Zm-4 0v-2h2v2Zm9 0q-.425 0-.712-.288Q19 20.425 19 20V4q0-.425.288-.713Q19.575 3 20 3t.712.287Q21 3.575 21 4v16q0 .425-.288.712Q20.425 21 20 21ZM7 21v-2h2v2Zm-4-4v-2h2v2Zm12-4v-2h2v2ZM3 21v-2h2v2Zm8-4v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderRight.displayName = 'AmauiIconMaterialBorderRight';

export default IconMaterialBorderRight;
