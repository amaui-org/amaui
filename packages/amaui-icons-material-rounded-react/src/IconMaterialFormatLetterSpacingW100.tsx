import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacingW100'

      short_name='FormatLetterSpacing'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m276 815 80 81q4 3.75 4 9.375T356 915q-4 5-10 4.5t-10-4.5l-93-93q-9-9-9-21t9-21l93-92q4-4 9.5-4.5t10.5 4.283Q361 693 361 698q0 5-5 10l-80 79h407l-79-79q-4-4-4.5-9.5t4.717-10.717Q609 683 614 683q5 0 10 5l92 92q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5t-10.5-4.283Q598 910 598 905q0-5 5-10l80-80H276Zm-10.035-265Q260 550 256 545.975T252 536V242q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v294q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm214 0Q474 550 470 545.975T466 536V242q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v294q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm214 0Q688 550 684 545.975T680 536V242q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v294q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacingW100.displayName = 'AmauiIconMaterialFormatLetterSpacingW100';

export default IconMaterialFormatLetterSpacingW100;
