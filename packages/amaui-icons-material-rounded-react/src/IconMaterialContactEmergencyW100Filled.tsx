import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactEmergencyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyW100Filled'

      short_name='ContactEmergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 9.6v1.65q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V9.6l1.425.825q.125.075.263.037.137-.037.212-.162.075-.125.038-.263-.038-.137-.163-.212L18.7 9l1.425-.825q.125-.075.163-.213.037-.137-.038-.262t-.212-.163q-.138-.037-.263.038L18.35 8.4V6.75q0-.15-.1-.25T18 6.4q-.15 0-.25.1t-.1.25V8.4l-1.425-.825q-.125-.075-.262-.038-.138.038-.213.163-.075.125-.037.262.037.138.162.213L17.3 9l-1.425.825q-.125.075-.162.212-.038.138.037.263t.213.162q.137.038.262-.037ZM2.8 19.2q-.65 0-1.075-.425Q1.3 18.35 1.3 17.7V6.3q0-.65.425-1.075Q2.15 4.8 2.8 4.8h18.4q.65 0 1.075.425.425.425.425 1.075v11.4q0 .65-.425 1.075-.425.425-1.075.425ZM9 14.3q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q9.975 9.6 9 9.6q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm-5.45 4.2h10.9Q13.4 17.3 12 16.55q-1.4-.75-3-.75t-3 .75q-1.4.75-2.45 1.95Z"/>
    </Icon>
  );
});

IconMaterialContactEmergencyW100Filled.displayName = 'AmauiIconMaterialContactEmergencyW100Filled';

export default IconMaterialContactEmergencyW100Filled;
