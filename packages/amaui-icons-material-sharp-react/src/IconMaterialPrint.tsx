import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrint = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Print'

      short_name='Print'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 8V5H8v3H6V3h12v5Zm2 4.5q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q18.425 10.5 18 10.5t-.712.287Q17 11.075 17 11.5t.288.712q.287.288.712.288ZM16 19v-4H8v4Zm2 2H6v-4H2V8h20v9h-4Zm2-6v-5H4v5h2v-2h12v2ZM4 10h16H6Z"/>
    </Icon>
  );
});

IconMaterialPrint.displayName = 'AmauiIconMaterialPrint';

export default IconMaterialPrint;
