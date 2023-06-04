import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepOverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepOverW100Filled'

      short_name='StepOver'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.118 830Q441 830 413.5 802.618q-27.5-27.383-27.5-66.5Q386 697 413.382 669.5q27.383-27.5 66.5-27.5Q519 642 546.5 669.382q27.5 27.383 27.5 66.5Q574 775 546.618 802.5q-27.383 27.5-66.5 27.5ZM221 550q22-88 93-145t165-57q75 0 136 37.5t96 97.5V342h28v208H531v-28h170q-28-65-87-105.5T480 376q-82.45 0-145.225 49.5Q272 475 250 550h-29Z"/>
    </Icon>
  );
});

IconMaterialStepOverW100Filled.displayName = 'AmauiIconMaterialStepOverW100Filled';

export default IconMaterialStepOverW100Filled;
