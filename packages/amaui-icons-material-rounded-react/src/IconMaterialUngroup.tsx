import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUngroup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ungroup'

      short_name='Ungroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M520 592 376 736q-11 11-28 11t-28-11q-11-11-11-28t11-28l144-144H360q-17 0-28.5-11.5T320 496q0-17 11.5-28.5T360 456h200q17 0 28.5 11.5T600 496v200q0 17-11.5 28.5T560 736q-17 0-28.5-11.5T520 696V592Zm0-296q-17 0-28.5-11.5T480 256q0-17 11.5-28.5T520 216h240q33 0 56.5 23.5T840 296v240q0 17-11.5 28.5T800 576q-17 0-28.5-11.5T760 536V296H520ZM200 936q-33 0-56.5-23.5T120 856V256q0-17 11.5-28.5T160 216q17 0 28.5 11.5T200 256v600h600q17 0 28.5 11.5T840 896q0 17-11.5 28.5T800 936H200Z"/>
    </Icon>
  );
});

IconMaterialUngroup.displayName = 'AmauiIconMaterialUngroup';

export default IconMaterialUngroup;
