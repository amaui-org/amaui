import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabledW100Filled'

      short_name='HourglassDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-1.6-1.6H5.55V20H7.7v-3q0-1.675.925-3.038Q9.55 12.6 11.1 12.1l-.325-.325q-.9-.35-1.587-1.05-.688-.7-1.063-1.6L2.25 3.25l.5-.5L21.8 21.8Zm-7.2-11-.45-.45q.9-.55 1.425-1.6T15.6 7V4H8.4v1.6l-.7-.7V4h-.9l-.7-.7h12.35V4H16.3v3q0 1.325-.587 2.462Q15.125 10.6 14.1 11.3ZM8.4 20h7.2v-3.4l-3.875-3.875q-1.5.125-2.413 1.388Q8.4 15.375 8.4 17Zm7.9 0H19l-2.7-2.7Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledW100Filled.displayName = 'AmauiIconMaterialHourglassDisabledW100Filled';

export default IconMaterialHourglassDisabledW100Filled;
