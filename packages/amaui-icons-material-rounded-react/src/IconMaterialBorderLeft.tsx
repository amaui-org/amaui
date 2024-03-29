import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderLeft'

      short_name='BorderLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 9V7h2v2Zm-8 0V7h2v2Zm0 4v-2h2v2Zm8 0v-2h2v2Zm-4-8V3h2v2Zm4 0V3h2v2Zm-8 0V3h2v2ZM7 5V3h2v2Zm8 8v-2h2v2Zm-8 8v-2h2v2Zm4 0v-2h2v2Zm-7 0q-.425 0-.712-.288Q3 20.425 3 20V4q0-.425.288-.713Q3.575 3 4 3t.713.287Q5 3.575 5 4v16q0 .425-.287.712Q4.425 21 4 21Zm11 0v-2h2v2Zm4-4v-2h2v2ZM7 13v-2h2v2Zm12 8v-2h2v2Zm-8-4v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderLeft.displayName = 'AmauiIconMaterialBorderLeft';

export default IconMaterialBorderLeft;
