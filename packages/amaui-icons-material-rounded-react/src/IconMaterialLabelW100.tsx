import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelW100'

      short_name='Label'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.95 17.7q-.625 0-1.062-.438-.438-.437-.438-1.062V7.8q0-.625.438-1.062Q5.325 6.3 5.95 6.3h8.4q.55 0 1.037.25.488.25.813.7l2.725 3.875q.275.4.275.875t-.275.875L16.2 16.7q-.35.45-.812.725-.463.275-1.038.275ZM18.7 12l-3.1-4.35q-.2-.275-.538-.462Q14.725 7 14.35 7h-8.4q-.3 0-.55.25-.25.25-.25.55v8.4q0 .3.25.55.25.25.55.25h8.4q.375 0 .712-.188.338-.187.538-.462ZM5.15 12V17 7v.65Z"/>
    </Icon>
  );
});

IconMaterialLabelW100.displayName = 'AmauiIconMaterialLabelW100';

export default IconMaterialLabelW100;
