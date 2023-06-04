import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewLabelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelW100'

      short_name='NewLabel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 17.7V17h2q.375 0 .712-.175.338-.175.538-.475L18.7 12l-3.1-4.35q-.2-.3-.538-.475Q14.725 7 14.35 7h-8.4q-.3 0-.55.25-.25.25-.25.55v1.85h-.7V7.8q0-.625.438-1.062Q5.325 6.3 5.95 6.3h8.4q.55 0 1.037.25.488.25.813.7l2.725 3.875q.275.4.275.875t-.275.875L16.2 16.7q-.35.45-.812.725-.463.275-1.038.275Zm-.425-5.7ZM6 19.35q-.15 0-.25-.1t-.1-.25v-2.65H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V13q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65H9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H6.35V19q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialNewLabelW100.displayName = 'AmauiIconMaterialNewLabelW100';

export default IconMaterialNewLabelW100;
