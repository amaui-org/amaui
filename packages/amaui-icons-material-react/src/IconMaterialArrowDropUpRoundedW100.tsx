import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDropUpRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpRoundedW100'
      short_name='ArrowDropUp'

      {...props}
    >
      <path d="M10.375 13.35Q9.875 13.35 9.688 12.887Q9.5 12.425 9.85 12.075L11.5 10.425Q11.625 10.3 11.75 10.25Q11.875 10.2 12.025 10.2Q12.175 10.2 12.3 10.25Q12.425 10.3 12.55 10.425L14.2 12.075Q14.55 12.425 14.363 12.887Q14.175 13.35 13.675 13.35Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpRoundedW100.displayName = 'AmauiIconMaterialArrowDropUpRoundedW100';

export default IconMaterialArrowDropUpRoundedW100;
