import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaundrySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaundrySharpW100Filled'
      short_name='Laundry'

      {...props}
    >
      <path d="M7.3 13.1V8.775L4.625 10.25 2.9 7.275l4.8-2.75h.45Q8.575 5.8 9.613 6.55 10.65 7.3 12 7.3t2.388-.75q1.037-.75 1.462-2.025h.45L21.075 7.3l-1.7 2.95L16.7 8.775v7.7l-.4.35q-.125.125-.325.162-.2.038-.35.038-.2 0-.362-.05-.163-.05-.288-.15l-2.9-2.475q-.775-.65-1.75-1T8.375 13q-.275 0-.537.025-.263.025-.538.075Zm-2.575 4.725-.45-.525 1.675-1.425q.5-.425 1.138-.637.637-.213 1.287-.213.65 0 1.275.213.625.212 1.125.637l2.9 2.475q.4.35.925.512.525.163 1.05.163t1.038-.163q.512-.162.912-.512l1.675-1.45.475.55-1.7 1.425q-.5.425-1.125.638-.625.212-1.275.212-.65 0-1.287-.212-.638-.213-1.138-.638l-2.9-2.475q-.4-.35-.925-.513-.525-.162-1.05-.162t-1.038.162q-.512.163-.912.513Z"/>
    </Icon>
  );
});

IconMaterialLaundrySharpW100Filled.displayName = 'AmauiIconMaterialLaundrySharpW100Filled';

export default IconMaterialLaundrySharpW100Filled;
