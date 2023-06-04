import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterDamageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDamageW100'

      short_name='WaterDamage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.05 18.7q-.325 0-.537-.213-.213-.212-.213-.537v-7h-.125q-.275 0-.375-.25-.1-.25.1-.45l5.6-5.05q.2-.2.5-.2t.5.2l5.6 5.05q.2.2.1.45t-.375.25H17.7v7q0 .325-.212.537-.213.213-.538.213ZM7 18h10v-7.8l-5-4.5-5 4.5Zm5-6.15Zm0 3.5q.575 0 .963-.388.387-.387.387-.962 0-.35-.162-.725-.163-.375-.763-1.25-.1-.125-.2-.188-.1-.062-.225-.062t-.225.062q-.1.063-.2.188-.65.925-.787 1.25-.138.325-.138.725 0 .575.388.962.387.388.962.388Z"/>
    </Icon>
  );
});

IconMaterialWaterDamageW100.displayName = 'AmauiIconMaterialWaterDamageW100';

export default IconMaterialWaterDamageW100;
