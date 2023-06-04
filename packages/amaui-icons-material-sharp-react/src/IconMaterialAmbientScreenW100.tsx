import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmbientScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmbientScreenW100'

      short_name='AmbientScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v287h-28V336H160v480h419v28H132Zm648 54-32.057-69.943L678 796l69.943-32.057L780 694l32.057 69.943L882 796l-69.943 32.057L780 898Zm-620-82V336v480-20 20Zm320-110 40-90 90-40-90-40-40-90-40 90-90 40 90 40 40 90Z"/>
    </Icon>
  );
});

IconMaterialAmbientScreenW100.displayName = 'AmauiIconMaterialAmbientScreenW100';

export default IconMaterialAmbientScreenW100;
