import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneForwardedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneForwardedW100'

      short_name='PhoneForwarded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.7 9.3-.5-.5 2.25-2.25h-6.1v-.7h6.1L17.2 3.6l.5-.5 3.1 3.1Zm.925 10.25q-2.425.025-4.963-1.275-2.537-1.3-4.612-3.362-2.075-2.063-3.387-4.601Q4.35 7.775 4.35 5.35q0-.25.013-.525.012-.275.062-.525h3.95L9.2 8.075 6.55 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.55-2.675 3.35.7v3.9q-.225.05-.512.063-.288.012-.513.012ZM6.2 9.85l2.225-2L7.8 5H5.075q-.1 1.2.263 2.475Q5.7 8.75 6.2 9.85Zm8.2 8q.875.45 2.225.775t2.325.2v-2.7l-2.4-.475Zm-8.2-8Zm8.2 8Z"/>
    </Icon>
  );
});

IconMaterialPhoneForwardedW100.displayName = 'AmauiIconMaterialPhoneForwardedW100';

export default IconMaterialPhoneForwardedW100;
