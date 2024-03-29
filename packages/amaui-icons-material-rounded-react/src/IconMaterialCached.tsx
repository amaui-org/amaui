import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCached = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cached'

      short_name='Cached'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 20q-3.35 0-5.7-2.325T4 12v-.175l-.9.9Q2.825 13 2.4 13q-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213Q4.8 8.45 5 8.45t.375.062q.175.063.325.213l2.6 2.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-.9-.9V12q0 2.5 1.763 4.25Q9.525 18 12.05 18q.5 0 .975-.087.475-.088.95-.263.25-.1.538-.05.287.05.487.25.45.45.363.962-.088.513-.663.713-.65.225-1.312.35-.663.125-1.338.125ZM19 15.55q-.2 0-.375-.063-.175-.062-.325-.212l-2.6-2.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l.9.9V12q0-2.5-1.762-4.25Q14.475 6 11.95 6q-.5 0-.975.088-.475.087-.95.262-.25.1-.537.05Q9.2 6.35 9 6.15q-.45-.45-.363-.963.088-.512.663-.712.65-.225 1.313-.35Q11.275 4 11.95 4q3.35 0 5.7 2.325T20 12v.175l.9-.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialCached.displayName = 'AmauiIconMaterialCached';

export default IconMaterialCached;
