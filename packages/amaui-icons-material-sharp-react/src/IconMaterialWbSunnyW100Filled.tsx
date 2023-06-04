import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbSunnyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbSunnyW100Filled'

      short_name='WbSunny'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 3.85v-2.2h.7v2.2Zm0 18.5v-2.2h.7v2.2Zm8.5-10v-.7h2.2v.7Zm-18.5 0v-.7h2.2v.7ZM18.2 6.3l-.5-.5 1.35-1.35.5.5ZM4.95 19.55l-.5-.5L5.8 17.7l.5.5Zm14.1 0L17.7 18.2l.5-.5 1.35 1.35ZM5.8 6.3 4.45 4.95l.5-.5L6.3 5.8ZM12 16.7q-1.95 0-3.325-1.375Q7.3 13.95 7.3 12q0-1.95 1.375-3.325Q10.05 7.3 12 7.3q1.95 0 3.325 1.375Q16.7 10.05 16.7 12q0 1.95-1.375 3.325Q13.95 16.7 12 16.7Z"/>
    </Icon>
  );
});

IconMaterialWbSunnyW100Filled.displayName = 'AmauiIconMaterialWbSunnyW100Filled';

export default IconMaterialWbSunnyW100Filled;
