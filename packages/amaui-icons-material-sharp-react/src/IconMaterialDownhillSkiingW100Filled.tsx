import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownhillSkiingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownhillSkiingW100Filled'

      short_name='DownhillSkiing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.075 6.1q-.65 0-1.125-.475T14.475 4.5q0-.65.475-1.125t1.125-.475q.65 0 1.125.475t.475 1.125q0 .65-.475 1.125t-1.125.475Zm2.5 16.25q-.575 0-1.137-.087-.563-.088-1.113-.288L2.7 17l.225-.65 7 2.55 1.85-4.525L7.6 10.45q-.2-.2-.288-.438-.087-.237-.087-.487 0-.35.2-.675.2-.325.475-.5l4.225-2.525q.175-.125.338-.15.162-.025.337-.025.425 0 .8.25.375.25.5.675l.325 1.075q.45 1.475 1.225 2.375.775.9 2.225 1.35l.55-1.65.65.225-.8 2.25q-1.875-.475-2.862-1.413-.988-.937-1.638-2.862l-4.125 2.45 3.025 3.675-2.075 5.1 4.075 1.475L16.9 14.1q.15.1.3.137l.35.088-2.225 6.55 1.1.4q.575.2 1.075.287.5.088 1.075.088.6 0 1.15-.088.55-.087 1.075-.287l.5.55q-.65.3-1.325.413-.675.112-1.4.112Z"/>
    </Icon>
  );
});

IconMaterialDownhillSkiingW100Filled.displayName = 'AmauiIconMaterialDownhillSkiingW100Filled';

export default IconMaterialDownhillSkiingW100Filled;
