import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDialerSipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialerSipW100'

      short_name='DialerSip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.3 8.65V4.9h.7v3.75Zm-3.2 0v-.7h1.75V7.1H12.1V4.9h2.45v.7H12.8v.8h1.75v2.25Zm4.65 0V4.9h2.5v2.2h-1.8v1.55Zm.7-2.25h1.1v-.8h-1.1Zm1.175 13.15q-2.425.025-4.963-1.275-2.537-1.3-4.612-3.362-2.075-2.063-3.387-4.601Q4.35 7.775 4.35 5.35q0-.25.013-.525.012-.275.062-.525h3.95L9.2 8.075 6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.55-2.675 3.35.7v3.9q-.225.05-.512.063-.288.012-.513.012ZM6.2 9.85l2.225-2L7.8 5H5.075q-.1 1.2.263 2.475Q5.7 8.75 6.2 9.85Zm8.2 8q.875.45 2.225.775t2.325.2v-2.7l-2.4-.475Zm-8.2-8Zm8.2 8Z"/>
    </Icon>
  );
});

IconMaterialDialerSipW100.displayName = 'AmauiIconMaterialDialerSipW100';

export default IconMaterialDialerSipW100;
