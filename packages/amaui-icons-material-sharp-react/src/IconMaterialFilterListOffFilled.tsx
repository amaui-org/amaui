import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterListOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListOffFilled'

      short_name='FilterListOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.625-18.4-18.4L2.8 2.8l18.4 18.4ZM3 8V6h2.15v2Zm3 5v-2h4.15v2Zm4.825-5-2-2H21v2ZM10 18v-2h4v2Zm5.825-5-2-2H18v2Z"/>
    </Icon>
  );
});

IconMaterialFilterListOffFilled.displayName = 'AmauiIconMaterialFilterListOffFilled';

export default IconMaterialFilterListOffFilled;
