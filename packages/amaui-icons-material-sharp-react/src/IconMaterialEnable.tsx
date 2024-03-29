import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Enable'

      short_name='Enable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-3.375 1.975-5.988Q5.95 3.4 9 2.45V4.6q-2.2.9-3.6 2.887Q4 9.475 4 12q0 3.325 2.338 5.663Q8.675 20 12 20q3.325 0 5.663-2.337Q20 15.325 20 12q0-2.525-1.4-4.513Q17.2 5.5 15 4.6V2.45q3.05.95 5.025 3.562Q22 8.625 22 12q0 2.075-.788 3.9-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-6-5-5 1.4-1.4 2.6 2.575V2h2v10.175L15.6 9.6 17 11Z"/>
    </Icon>
  );
});

IconMaterialEnable.displayName = 'AmauiIconMaterialEnable';

export default IconMaterialEnable;
