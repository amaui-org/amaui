import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMissedVideoCallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissedVideoCallW100'

      short_name='MissedVideoCall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.375 14.1-3.8-3.8H9.75q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.6q-.325 0-.537.212-.213.213-.213.538v2.625q0 .125.1.225t.25.1q.15 0 .25-.1t.1-.25V10.8l3.775 3.775q.1.1.238.15.137.05.287.05.125 0 .262-.05.138-.05.263-.175l2.85-2.875q.1-.1.1-.225t-.125-.25q-.125-.125-.262-.125-.138 0-.238.125Zm-5.95 4.6q-.65 0-1.075-.425-.425-.425-.425-1.075V6.8q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v4.7L19.4 9.425q.2-.2.438-.088.237.113.237.388v4.55q0 .275-.237.387-.238.113-.438-.087L17.325 12.5v4.7q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.4q.35 0 .575-.225.225-.225.225-.575V6.8q0-.35-.225-.575Q16.175 6 15.825 6h-10.4q-.35 0-.575.225-.225.225-.225.575v10.4q0 .35.225.575.225.225.575.225Zm-.8 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialMissedVideoCallW100.displayName = 'AmauiIconMaterialMissedVideoCallW100';

export default IconMaterialMissedVideoCallW100;
