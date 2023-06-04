import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterDamageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageW100Filled'

      short_name='WaterDamage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 18.7v-8h-.9L12 4.75l6.6 5.95h-.9v8Zm5.7-3.35q.575 0 .963-.388.387-.387.387-.962 0-.35-.162-.725-.163-.375-.763-1.25-.1-.125-.2-.188-.1-.062-.225-.062t-.225.062q-.1.063-.2.188-.65.925-.787 1.25-.138.325-.138.725 0 .575.388.962.387.388.962.388Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageW100Filled.displayName = 'AmauiIconMaterialWaterDamageW100Filled';

export default IconMaterialWaterDamageW100Filled;
