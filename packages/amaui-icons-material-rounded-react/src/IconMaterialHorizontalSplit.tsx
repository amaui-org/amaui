import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalSplit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplit'

      short_name='HorizontalSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 7q-.425 0-.7-.287Q3 6.425 3 6t.288-.713Q3.575 5 4 5h16.025q.425 0 .7.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7Zm0 4q-.425 0-.7-.288Q3 10.425 3 10t.288-.713Q3.575 9 4 9h16.025q.425 0 .7.287Q21 9.575 21 10t-.288.712Q20.425 11 20 11ZM4 19q-.425 0-.712-.288Q3 18.425 3 18v-4q0-.425.288-.713Q3.575 13 4 13h16q.425 0 .712.287.288.288.288.713v4q0 .425-.288.712Q20.425 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialHorizontalSplit.displayName = 'AmauiIconMaterialHorizontalSplit';

export default IconMaterialHorizontalSplit;
