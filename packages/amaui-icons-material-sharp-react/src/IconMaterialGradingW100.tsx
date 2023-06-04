import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradingW100'

      short_name='Grading'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 19.75v-.7h7.7v.7Zm0-3.7v-.7h7.7v.7Zm0-3.7v-.7h16.7v.7Zm0-3.7v-.7h16.7v.7Zm0-3.7v-.7h16.7v.7Zm12.775 14.525L14.5 17.55l.475-.475L16.4 18.5l3.2-3.2.5.5Z"/>
    </Icon>
  );
});

IconMaterialGradingW100.displayName = 'AmauiIconMaterialGradingW100';

export default IconMaterialGradingW100;
