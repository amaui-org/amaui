import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAcuteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcuteFilled'

      short_name='Acute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 20q-3.35 0-5.675-2.325Q7 15.35 7 12q0-3.325 2.325-5.663Q11.65 4 15 4q3.325 0 5.663 2.337Q23 8.675 23 12q0 3.35-2.337 5.675Q18.325 20 15 20Zm2.275-4.275L18.7 14.3 16 11.6V8h-2v4.425ZM2 9V7h4v2Zm-1 4v-2h5v2Zm1 4v-2h4v2Z"/>
    </Icon>
  );
});

IconMaterialAcuteFilled.displayName = 'AmauiIconMaterialAcuteFilled';

export default IconMaterialAcuteFilled;
