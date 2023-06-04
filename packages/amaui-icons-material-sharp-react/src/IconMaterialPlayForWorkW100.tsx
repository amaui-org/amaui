import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayForWorkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayForWorkW100'

      short_name='PlayForWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.7q-1.95 0-3.325-1.375Q7.3 15.95 7.3 14H8q0 1.65 1.175 2.825Q10.35 18 12 18q1.65 0 2.825-1.175Q16 15.65 16 14h.7q0 1.95-1.375 3.325Q13.95 18.7 12 18.7Zm0-4.6L8.9 11l.5-.5 2.25 2.25v-7.1h.7v7.1l2.25-2.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialPlayForWorkW100.displayName = 'AmauiIconMaterialPlayForWorkW100';

export default IconMaterialPlayForWorkW100;
