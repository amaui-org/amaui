import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareArrowsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrowsSharp'
      short_name='CompareArrows'

      {...props}
    >
      <path d="M16 14 11 9 16 4 17.4 5.425 14.825 8H22V10H14.825L17.4 12.575ZM8 20 13 15 8 10 6.6 11.425 9.175 14H2V16H9.175L6.6 18.575Z"/>
    </Icon>
  );
});

IconMaterialCompareArrowsSharp.displayName = 'AmauiIconMaterialCompareArrowsSharp';

export default IconMaterialCompareArrowsSharp;
