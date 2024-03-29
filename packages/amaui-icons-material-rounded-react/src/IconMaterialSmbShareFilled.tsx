import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmbShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmbShareFilled'

      short_name='SmbShare'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M485 616h163q26 0 44-18t18-44q0-26-18-44.5T648 491h-2q-5-32-29-53.5T560 416q-26 0-47 13.5T481 466q-30 2-50.5 23.5T410 541q0 30 21.5 52.5T485 616ZM120 936q-33 0-56.5-23.5T40 856V376q0-17 11.5-28.5T80 336q17 0 28.5 11.5T120 376v480h640q17 0 28.5 11.5T800 896q0 17-11.5 28.5T760 936H120Zm160-160q-33 0-56.5-23.5T200 696V256q0-33 23.5-56.5T280 176h167q16 0 30.5 6t25.5 17l57 57h280q33 0 56.5 23.5T920 336v360q0 33-23.5 56.5T840 776H280Z"/>
    </Icon>
  );
});

IconMaterialSmbShareFilled.displayName = 'AmauiIconMaterialSmbShareFilled';

export default IconMaterialSmbShareFilled;
