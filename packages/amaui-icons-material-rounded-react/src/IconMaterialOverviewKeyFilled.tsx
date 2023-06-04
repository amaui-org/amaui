import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOverviewKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKeyFilled'

      short_name='OverviewKey'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 856q-33 0-56.5-23.5T40 776V376q0-33 23.5-56.5T120 296h400q33 0 56.5 23.5T600 376v400q0 33-23.5 56.5T520 856H120Zm600 0q-17 0-28.5-11.5T680 816V336q0-17 11.5-28.5T720 296q17 0 28.5 11.5T760 336v480q0 17-11.5 28.5T720 856Zm160 0q-17 0-28.5-11.5T840 816V336q0-17 11.5-28.5T880 296q17 0 28.5 11.5T920 336v480q0 17-11.5 28.5T880 856Z"/>
    </Icon>
  );
});

IconMaterialOverviewKeyFilled.displayName = 'AmauiIconMaterialOverviewKeyFilled';

export default IconMaterialOverviewKeyFilled;
