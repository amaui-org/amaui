import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIceSkatingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingW100Filled'

      short_name='IceSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 20.65v-3.3h-1.5q-.625 0-1.062-.437-.438-.438-.438-1.063V5.15q0-.625.438-1.063.437-.437 1.062-.437h4.1q.625 0 1.062.437.438.438.438 1.063v1H8.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.25v.65q0 .125.075.65H8.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.575q.3.575.812.975.513.4 1.163.6l2.625.725q1.1.275 1.763 1.175.662.9.662 2.025v1.5q0 .625-.437 1.063-.438.437-1.063.437h-1.25v3.3H18q1.275 0 2.312-.725Q21.35 19.2 21.6 17.95q.025-.125.138-.213.112-.087.237-.087.15 0 .25.112.1.113.075.263-.275 1.5-1.5 2.413-1.225.912-2.8.912H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1Zm.7 0h7.3v-3.3h-7.3Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingW100Filled.displayName = 'AmauiIconMaterialIceSkatingW100Filled';

export default IconMaterialIceSkatingW100Filled;
