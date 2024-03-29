import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewSidebarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarFilled'

      short_name='ViewSidebar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 8q-.425 0-.712-.287Q18 7.425 18 7V5q0-.425.288-.713Q18.575 4 19 4h2q.425 0 .712.287Q22 4.575 22 5v2q0 .425-.288.713Q21.425 8 21 8Zm0 6q-.425 0-.712-.288Q18 13.425 18 13v-2q0-.425.288-.713Q18.575 10 19 10h2q.425 0 .712.287.288.288.288.713v2q0 .425-.288.712Q21.425 14 21 14ZM3 20q-.425 0-.712-.288Q2 19.425 2 19V5q0-.425.288-.713Q2.575 4 3 4h12q.425 0 .713.287Q16 4.575 16 5v14q0 .425-.287.712Q15.425 20 15 20Zm16 0q-.425 0-.712-.288Q18 19.425 18 19v-2q0-.425.288-.712Q18.575 16 19 16h2q.425 0 .712.288.288.287.288.712v2q0 .425-.288.712Q21.425 20 21 20Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarFilled.displayName = 'AmauiIconMaterialViewSidebarFilled';

export default IconMaterialViewSidebarFilled;
