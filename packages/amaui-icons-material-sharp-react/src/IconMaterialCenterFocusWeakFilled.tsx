import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCenterFocusWeakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusWeakFilled'

      short_name='CenterFocusWeak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16ZM3 9V3h6v2H5v4Zm6 12H3v-6h2v4h4Zm6 0v-2h4v-4h2v6Zm4-12V5h-4V3h6v6Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusWeakFilled.displayName = 'AmauiIconMaterialCenterFocusWeakFilled';

export default IconMaterialCenterFocusWeakFilled;
