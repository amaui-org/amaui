import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiStatusbarNotConnected = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiStatusbarNotConnected'

      short_name='SignalWifiStatusbarNotConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.575q-.2 0-.375-.063-.175-.062-.325-.212L.725 9.725q-.3-.3-.3-.725t.3-.7Q3.05 6.2 5.95 5.1 8.85 4 12 4t6.05 1.1q2.9 1.1 5.225 3.2.3.275.3.7 0 .425-.3.725L23 10q-.7-.9-1.737-1.45Q20.225 8 19 8q-2.075 0-3.537 1.462Q14 10.925 14 13q0 1.225.55 2.262Q15.1 16.3 16 17l-3.3 3.3q-.15.15-.325.212-.175.063-.375.063Zm7.025-3.775q-.35 0-.563-.238-.212-.237-.162-.537.075-.575.35-.988.275-.412.925-1.062.525-.525.675-.787.15-.263.15-.663 0-.45-.35-.788-.35-.337-.925-.337-.35 0-.687.162-.338.163-.588.463-.225.275-.487.375-.263.1-.538-.025-.3-.125-.412-.4-.113-.275.037-.525.425-.675 1.112-1.063Q18.25 10 19.125 10q1.225 0 2 .725.775.725.775 1.85 0 .575-.25 1.025-.25.45-.95 1.15-.425.425-.612.688-.188.262-.238.587-.075.35-.3.562-.225.213-.525.213ZM19 20q-.425 0-.738-.312-.312-.313-.312-.738t.312-.738q.313-.312.738-.312t.738.312q.312.313.312.738t-.312.738Q19.425 20 19 20Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiStatusbarNotConnected.displayName = 'AmauiIconMaterialSignalWifiStatusbarNotConnected';

export default IconMaterialSignalWifiStatusbarNotConnected;
