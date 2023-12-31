import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChipsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChipsW100'

      short_name='Chips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-466h320q6 0 10-4t4-10q0-6-4-10t-10-4H320q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-88 294q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialChipsW100.displayName = 'AmauiIconMaterialChipsW100';

export default IconMaterialChipsW100;
