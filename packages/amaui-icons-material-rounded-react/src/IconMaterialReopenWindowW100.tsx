import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReopenWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReopenWindowW100'

      short_name='ReopenWindow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v162q0 5.95-4.035 9.975-4.035 4.025-10 4.025T804 539.975q-4-4.025-4-9.975V416H160v368q0 12 10 22t22 10h230q5.95 0 9.975 4.035 4.025 4.035 4.025 10T431.975 840q-4.025 4-9.975 4H192Zm527.675 128q-53.102 0-96.889-27.5Q579 917 556 871q-3-6-1.091-12.203 1.909-6.202 7.424-8.5Q567 848 572.5 850.381q5.5 2.381 8.5 7.619 20.143 38.877 57.071 62.438Q675 944 720 944q64.629 0 110.314-45.686Q876 852.629 876 788q0-64.629-45.686-110.314Q784.629 632 720 632q-41 0-76 20t-61 52h67q6.067 0 10.033 3.953 3.967 3.954 3.967 10Q664 724 660.033 728q-3.966 4-10.033 4h-84q-12.75 0-21.375-8.625T536 702v-84q0-6.067 3.953-10.033 3.954-3.967 10-3.967Q556 604 560 607.967q4 3.966 4 10.033v65q29-35 69.5-57t86.5-22q77 0 130.5 53.5T904 788q0 77-53.5 130.5T719.675 972Z"/>
    </Icon>
  );
});

IconMaterialReopenWindowW100.displayName = 'AmauiIconMaterialReopenWindowW100';

export default IconMaterialReopenWindowW100;
