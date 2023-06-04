import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsOutwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsOutwardW100'

      short_name='ArrowsOutward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M306 739 143 576l163-163 20 20-129 129h243v28l-244 1 129 129-19 19Zm348 0-20-20 129-129H520v-28l244-1-129-129 19-19 163 163-163 163Z"/>
    </Icon>
  );
});

IconMaterialArrowsOutwardW100.displayName = 'AmauiIconMaterialArrowsOutwardW100';

export default IconMaterialArrowsOutwardW100;
