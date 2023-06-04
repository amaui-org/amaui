import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInputCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputCircleW100'

      short_name='InputCircle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 468 317 631l19 19 130-128v380h28V522l130 128 19-19-163-163ZM173 739q-20-38-30.5-78.936Q132 619.129 132 576q0-72.21 27.391-135.72 27.392-63.51 74.348-110.49 46.957-46.98 110.435-74.385Q407.652 228 479.826 228q72.174 0 135.732 27.405 63.559 27.405 110.574 74.385 47.016 46.98 74.442 110.49Q828 503.79 828 576q0 43.129-10.5 84.064Q807 701 787 739l-20-20q17-35 25-70.424 8-35.424 8-72.576 0-134-93-227t-227-93q-134 0-227 93t-93 227q0 38 8.5 74.176Q177 686.353 194 719l-21 20Z"/>
    </Icon>
  );
});

IconMaterialInputCircleW100.displayName = 'AmauiIconMaterialInputCircleW100';

export default IconMaterialInputCircleW100;
