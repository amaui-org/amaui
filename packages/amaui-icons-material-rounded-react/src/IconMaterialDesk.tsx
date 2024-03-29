import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesk = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Desk'

      short_name='Desk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V7q0-.425.288-.713Q2.575 6 3 6h18q.425 0 .712.287Q22 6.575 22 7v10q0 .425-.288.712Q21.425 18 21 18q-.2 0-.387-.075-.188-.075-.325-.213-.138-.137-.213-.325Q20 17.2 20 17v-1h-4v1q0 .2-.075.387-.075.188-.212.325-.138.138-.325.213Q15.2 18 15 18q-.425 0-.712-.288Q14 17.425 14 17V8H4v9q0 .425-.287.712Q3.425 18 3 18t-.712-.288Q2 17.425 2 17Zm14-7h4V8h-4Zm0 4h4v-2h-4Z"/>
    </Icon>
  );
});

IconMaterialDesk.displayName = 'AmauiIconMaterialDesk';

export default IconMaterialDesk;
