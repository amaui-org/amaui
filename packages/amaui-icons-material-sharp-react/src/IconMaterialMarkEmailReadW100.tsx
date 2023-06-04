import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailReadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadW100'

      short_name='MarkEmailRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 21.05 12 17.7l.5-.5 2.85 2.85 5.7-5.7.5.5ZM12 11l7.6-5H4.4Zm-8.7 7.7V5.3h17.4v6.6l-.7.7V6.55l-8 5.3-8-5.3V17.2q0 .35.225.575Q4.45 18 4.8 18h4.675l.7.7Zm8.7-6.425ZM12 11Zm0 .85Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadW100.displayName = 'AmauiIconMaterialMarkEmailReadW100';

export default IconMaterialMarkEmailReadW100;
