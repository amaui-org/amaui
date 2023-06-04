import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteSweepW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepW100'

      short_name='DeleteSweep'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.85 17.35v-.7h2.7v.7Zm0-8v-.7h5.7v.7Zm0 4v-.7h4.7v.7ZM4.45 8h-1v-.7H7.1v-.7h2.1v.7h3.65V8h-1v9.7h-7.4Zm.7 0v9h6V8Zm0 0v9Z"/>
    </Icon>
  );
});

IconMaterialDeleteSweepW100.displayName = 'AmauiIconMaterialDeleteSweepW100';

export default IconMaterialDeleteSweepW100;
