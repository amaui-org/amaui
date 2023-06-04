import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderHorizontal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderHorizontal'

      short_name='BorderHorizontal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 5V3h2v2Zm4 0V3h2v2Zm4 0V3h2v2Zm4 0V3h2v2Zm4 0V3h2v2ZM3 9V7h2v2Zm8 0V7h2v2Zm8 0V7h2v2Zm1 4H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13ZM3 17v-2h2v2Zm8 0v-2h2v2Zm8 0v-2h2v2ZM3 21v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderHorizontal.displayName = 'AmauiIconMaterialBorderHorizontal';

export default IconMaterialBorderHorizontal;
