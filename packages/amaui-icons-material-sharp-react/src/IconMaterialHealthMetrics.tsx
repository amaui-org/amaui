import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthMetrics = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetrics'

      short_name='HealthMetrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 976V776H80V376h200V176h400v200h200v400H680v200H280ZM160 536h221l47 70 54-172h71l68 102h179v-80H600V256H360v200H160v80Zm200 360h240V696h200v-80H578l-46-70-54 173h-72l-68-103H160v80h200v200Zm120-320Z"/>
    </Icon>
  );
});

IconMaterialHealthMetrics.displayName = 'AmauiIconMaterialHealthMetrics';

export default IconMaterialHealthMetrics;
