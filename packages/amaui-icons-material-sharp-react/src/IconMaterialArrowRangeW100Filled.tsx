import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRangeW100Filled'

      short_name='ArrowRange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 740 116 576l164-163 19 20-129 129h619L660 433l20-20 163 163-163 164-20-20 129-130H170l129 130-19 20Z"/>
    </Icon>
  );
});

IconMaterialArrowRangeW100Filled.displayName = 'AmauiIconMaterialArrowRangeW100Filled';

export default IconMaterialArrowRangeW100Filled;
