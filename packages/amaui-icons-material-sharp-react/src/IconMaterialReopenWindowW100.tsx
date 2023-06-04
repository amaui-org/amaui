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
      <path d="M132 844V308h696v236h-28V416H160v400h276v28H132Zm588 128q-61 0-109-36.5T545 844h30q17 45 55.612 72.5Q669.223 944 720 944q64.629 0 110.314-45.686Q876 852.629 876 788q0-64.629-45.686-110.314Q784.629 632 720 632q-39 0-75 20t-62 52h81v28H536V604h28v79q29-35 70-57t86-22q76.36 0 130.18 53.82Q904 711.64 904 788q0 76.36-53.82 130.18Q796.36 972 720 972Z"/>
    </Icon>
  );
});

IconMaterialReopenWindowW100.displayName = 'AmauiIconMaterialReopenWindowW100';

export default IconMaterialReopenWindowW100;
