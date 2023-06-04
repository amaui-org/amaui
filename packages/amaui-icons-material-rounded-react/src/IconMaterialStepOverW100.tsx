import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepOverW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepOverW100'

      short_name='StepOver'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.118 830Q441 830 413.5 802.618q-27.5-27.383-27.5-66.5Q386 697 413.382 669.5q27.383-27.5 66.5-27.5Q519 642 546.5 669.382q27.5 27.383 27.5 66.5Q574 775 546.618 802.5q-27.383 27.5-66.5 27.5ZM701 522q-28-65-87-105.5T480 376q-76.658 0-137.387 43.72T256 532q-2.129 7.116-6.565 12.558Q245 550 238.2 550q-7.2 0-10.7-5.5Q224 539 226 533q26-81 94.5-133T479 348q75 0 136 37.5t96 97.5V356q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v164q0 12.75-8.625 21.375T709 550H545q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h156Z"/>
    </Icon>
  );
});

IconMaterialStepOverW100.displayName = 'AmauiIconMaterialStepOverW100';

export default IconMaterialStepOverW100;
