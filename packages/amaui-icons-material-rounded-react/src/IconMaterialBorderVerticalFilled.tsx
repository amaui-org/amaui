import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderVerticalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderVerticalFilled'

      short_name='BorderVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Zm4 16v-2h2v2Zm0-8v-2h2v2Zm0-8V3h2v2Zm5 16q-.425 0-.712-.288Q11 20.425 11 20V4q0-.425.288-.713Q11.575 3 12 3t.713.287Q13 3.575 13 4v16q0 .425-.287.712Q12.425 21 12 21Zm3 0v-2h2v2Zm0-8v-2h2v2Zm0-8V3h2v2Zm4 16v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderVerticalFilled.displayName = 'AmauiIconMaterialBorderVerticalFilled';

export default IconMaterialBorderVerticalFilled;
