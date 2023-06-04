import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintFilled'

      short_name='Print'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 7H6V3h12Zm0 5.5q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q18.425 10.5 18 10.5t-.712.287Q17 11.075 17 11.5t.288.712q.287.288.712.288ZM16 19v-4H8v4Zm2 2H6v-4H2V8h20v9h-4Z"/>
    </Icon>
  );
});

IconMaterialPrintFilled.displayName = 'AmauiIconMaterialPrintFilled';

export default IconMaterialPrintFilled;
