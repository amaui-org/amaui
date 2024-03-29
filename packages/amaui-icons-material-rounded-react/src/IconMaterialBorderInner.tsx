import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderInner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderInner'

      short_name='BorderInner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2v2Zm9 0q-.425 0-.712-.288Q11 20.425 11 20v-7H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h7V4q0-.425.288-.713Q11.575 3 12 3t.713.287Q13 3.575 13 4v7h7q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13h-7v7q0 .425-.287.712Q12.425 21 12 21Zm-9-4v-2h2v2Zm0-8V7h2v2Zm0-4V3h2v2Zm4 16v-2h2v2ZM7 5V3h2v2Zm8 16v-2h2v2Zm0-16V3h2v2Zm4 16v-2h2v2Zm0-4v-2h2v2Zm0-8V7h2v2Zm0-4V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderInner.displayName = 'AmauiIconMaterialBorderInner';

export default IconMaterialBorderInner;
