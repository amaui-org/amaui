import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ecg'

      short_name='Ecg'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 576ZM80 456V256h800v320h-80V336H160v120H80Zm0 440V696h80v120h280v80H80Zm640 100-61-52q-88-75-113.5-108.5T520 766q0-45 32-77.5t78-32.5q26 0 49.5 12t40.5 35q16-23 39.5-35t50.5-12q45 0 77.5 32.5T920 766q0 36-26 69.5T780 944l-60 52Zm0-106 28-23q56-48 74-67.5t18-33.5q0-12-9-21t-21-9q-8 0-14.5 3.5T780 751l-60 57-61-57q-9-8-15.5-11.5T630 736q-13 0-21.5 9t-8.5 21q0 14 17.5 33.5T691 867l29 23ZM80 616v-80h144l56 111 134-271h51l79 160h136v80H495l-55-110-135 270h-50l-80-160H80Zm640 197Z"/>
    </Icon>
  );
});

IconMaterialEcg.displayName = 'AmauiIconMaterialEcg';

export default IconMaterialEcg;
