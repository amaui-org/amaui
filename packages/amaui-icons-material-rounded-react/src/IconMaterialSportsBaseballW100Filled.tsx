import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsBaseballW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBaseballW100Filled'

      short_name='SportsBaseball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 17.825q-1.075-1.2-1.638-2.7Q3.3 13.625 3.3 12t.562-3.125q.563-1.5 1.638-2.7 1.4 1 2.138 2.55.737 1.55.737 3.275 0 1.725-.737 3.275-.738 1.55-2.138 2.55ZM12 20.7q-1.675 0-3.2-.613-1.525-.612-2.725-1.762Q7.5 17.15 8.288 15.512q.787-1.637.787-3.512t-.787-3.513Q7.5 6.85 6.075 5.675q1.2-1.15 2.725-1.763Q10.325 3.3 12 3.3q1.675 0 3.2.612 1.525.613 2.725 1.763Q16.5 6.85 15.713 8.487q-.788 1.638-.788 3.513t.788 3.512q.787 1.638 2.212 2.813-1.2 1.15-2.725 1.762-1.525.613-3.2.613Zm6.5-2.875q-1.4-1-2.137-2.55-.738-1.55-.738-3.275 0-1.725.738-3.275.737-1.55 2.137-2.55 1.075 1.2 1.638 2.7.562 1.5.562 3.125t-.562 3.125q-.563 1.5-1.638 2.7Z"/>
    </Icon>
  );
});

IconMaterialSportsBaseballW100Filled.displayName = 'AmauiIconMaterialSportsBaseballW100Filled';

export default IconMaterialSportsBaseballW100Filled;
