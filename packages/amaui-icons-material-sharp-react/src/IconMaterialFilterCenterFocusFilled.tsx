import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterCenterFocusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterCenterFocusFilled'

      short_name='FilterCenterFocus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q-1.25 0-2.125-.875T9 12q0-1.25.875-2.125T12 9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15ZM3 9V3h6v2H5v4Zm6 12H3v-6h2v4h4Zm6 0v-2h4v-4h2v6Zm4-12V5h-4V3h6v6Z"/>
    </Icon>
  );
});

IconMaterialFilterCenterFocusFilled.displayName = 'AmauiIconMaterialFilterCenterFocusFilled';

export default IconMaterialFilterCenterFocusFilled;
