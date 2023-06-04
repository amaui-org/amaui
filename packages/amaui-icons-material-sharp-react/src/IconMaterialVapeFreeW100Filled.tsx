import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVapeFreeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VapeFreeW100Filled'

      short_name='VapeFree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 18.5q-.975-.225-1.638-.3-.662-.075-1.362-.075H4v-1.25h.8q.7 0 1.362-.075.663-.075 1.638-.3Zm12.9 3.2-3.2-3.2H8.8v-2h6.7L2.3 3.3l.5-.5 18.4 18.4Zm-.2-4.025L19.325 16.5H20.5v1.175ZM10.5 18q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm9.3-3v-2.25q0-1.65-1.15-2.65t-2.85-1v-.7q.775 0 1.287-.538.513-.537.513-1.262 0-.775-.513-1.338Q16.575 4.7 15.8 4.7V4q1.1 0 1.8.775t.7 1.825q0 .7-.287 1.212-.288.513-.763.788 1.275.35 2.263 1.412.987 1.063.987 2.738V15Zm-1.7 0v-1.3q0-.925-.612-1.488-.613-.562-1.338-.562h-1.675L12.05 9.225V9q0-1.075.762-1.762.763-.688 1.788-.688v.7q-.75 0-1.3.5T12.75 9q0 .75.55 1.35.55.6 1.3.6h1.55q1.175 0 1.912.837.738.838.738 1.913V15Z"/>
    </Icon>
  );
});

IconMaterialVapeFreeW100Filled.displayName = 'AmauiIconMaterialVapeFreeW100Filled';

export default IconMaterialVapeFreeW100Filled;
