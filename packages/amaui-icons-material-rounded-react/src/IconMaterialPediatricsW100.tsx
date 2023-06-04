import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPediatricsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PediatricsW100'

      short_name='Pediatrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M340 406q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h126v-96q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v96h126q5.95 0 9.975 4.035 4.025 4.035 4.025 10T629.975 402q-4.025 4-9.975 4H340Zm52 496q-24.75 0-42.375-17.625T332 842V536q0-37.5 26.25-63.75T422 446h116q37.5 0 63.75 26.25T628 536v306q0 24.75-17.625 42.375T568 902H392Zm-32-28h208q14 0 23-9t9-23V536q0-26.35-17.825-44.175Q564.35 474 538 474H422q-26.35 0-44.175 17.825Q360 509.65 360 536v53h80q5.95 0 9.975 4.035 4.025 4.035 4.025 10T449.975 613q-4.025 4-9.975 4h-80v114h80q6 0 10 4.035t4 10q0 5.965-4.025 9.965T440 759h-80v115Zm0 0V474v400Z"/>
    </Icon>
  );
});

IconMaterialPediatricsW100.displayName = 'AmauiIconMaterialPediatricsW100';

export default IconMaterialPediatricsW100;
