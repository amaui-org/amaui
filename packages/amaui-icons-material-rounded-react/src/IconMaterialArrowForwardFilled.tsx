import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowForwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardFilled'

      short_name='ArrowForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.3 19.3q-.275-.275-.288-.7-.012-.425.263-.7l4.9-4.9H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.175l-4.9-4.9q-.275-.275-.263-.7.013-.425.288-.7.275-.275.7-.275.425 0 .7.275l6.6 6.6q.15.125.213.312.062.188.062.388t-.062.375q-.063.175-.213.325l-6.6 6.6q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardFilled.displayName = 'AmauiIconMaterialArrowForwardFilled';

export default IconMaterialArrowForwardFilled;
