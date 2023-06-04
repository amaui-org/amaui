import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPortraitLightingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PortraitLightingW100'

      short_name='PortraitLighting'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 544q-44.55 0-76.275-31.725Q372 480.55 372 436q0-44.55 31.725-76.275Q435.45 328 480 328q44.55 0 76.275 31.725Q588 391.45 588 436q0 44.55-31.725 76.275Q524.55 544 480 544ZM212 794v-22q0-22 13.5-41.5T262 700q55-26 109.5-39T480 648q54 0 108.5 13T698 700q23 11 36.5 30.5T748 772v22q0 12.75-8.625 21.375T718 824H242q-12.75 0-21.375-8.625T212 794Zm268 2h240v-24q0-14-9.5-26.5T684 724q-48-23-99.687-35.5Q532.627 676 480 676v120Zm0-280q33 0 56.5-23.5T560 436q0-33-23.5-56.5T480 356v160Z"/>
    </Icon>
  );
});

IconMaterialPortraitLightingW100.displayName = 'AmauiIconMaterialPortraitLightingW100';

export default IconMaterialPortraitLightingW100;
