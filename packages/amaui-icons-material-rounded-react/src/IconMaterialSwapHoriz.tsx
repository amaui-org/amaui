import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapHoriz = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHoriz'

      short_name='SwapHoriz'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.3 13.275q-.275-.275-.275-.7 0-.425.275-.7L18.175 10H12q-.425 0-.712-.288Q11 9.425 11 9t.288-.713Q11.575 8 12 8h6.175L16.3 6.125q-.275-.275-.275-.713 0-.437.275-.712.275-.275.7-.275.425 0 .7.275l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-3.6 3.6q-.275.275-.7.262-.425-.012-.7-.287ZM6.3 19.3l-3.6-3.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l3.6-3.6q.275-.275.7-.275.425 0 .7.275.275.275.275.712 0 .438-.275.713L5.825 14H12q.425 0 .713.287.287.288.287.713t-.287.712Q12.425 16 12 16H5.825L7.7 17.875q.275.275.275.7 0 .425-.275.7-.275.275-.7.287-.425.013-.7-.262Z"/>
    </Icon>
  );
});

IconMaterialSwapHoriz.displayName = 'AmauiIconMaterialSwapHoriz';

export default IconMaterialSwapHoriz;
