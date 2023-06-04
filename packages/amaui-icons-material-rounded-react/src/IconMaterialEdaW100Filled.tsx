import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdaW100Filled'

      short_name='Eda'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M306 978q-56 0-95-39t-39-95V732h155l127 169 174-174 125-75q16-9 34.5-8t32.5 12l35 26-268 268q-14 14-30.5 21t-35.799 7H306ZM172 704V310q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v254h115V230q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v334h114V190q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v374h115V270q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v418L457 859 341 704H172Z"/>
    </Icon>
  );
});

IconMaterialEdaW100Filled.displayName = 'AmauiIconMaterialEdaW100Filled';

export default IconMaterialEdaW100Filled;
