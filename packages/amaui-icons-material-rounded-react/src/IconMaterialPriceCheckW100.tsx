import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriceCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckW100'

      short_name='PriceCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 14.35q-.15 0-.25-.1t-.1-.25v-.65H5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.65v-3.3h-4.3q-.3 0-.5-.2t-.2-.5v-3.3q0-.3.2-.5t.5-.2h1.8V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.65H10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.35v3.3h4.3q.3 0 .5.2t.2.5v3.3q0 .3-.2.5t-.5.2h-1.8V14q0 .15-.1.25t-.25.1Zm6.45 5.45q-.15 0-.275-.05-.125-.05-.25-.175L10.85 17q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2.6 2.6 5.45-5.45q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-5.425 5.425q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialPriceCheckW100.displayName = 'AmauiIconMaterialPriceCheckW100';

export default IconMaterialPriceCheckW100;
