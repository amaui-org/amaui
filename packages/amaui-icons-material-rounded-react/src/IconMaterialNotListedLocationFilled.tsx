import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotListedLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotListedLocationFilled'

      short_name='NotListedLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q.425 0 .738-.312.312-.313.312-.738t-.312-.738Q12.425 13.9 12 13.9t-.737.312q-.313.313-.313.738t.313.738Q11.575 16 12 16Zm0-3.1q.3 0 .513-.212.212-.213.262-.538.025-.15.05-.25t.075-.2q.1-.2.288-.413.187-.212.612-.637.525-.525.788-1.05.262-.525.262-1.05 0-1.175-.775-1.862Q13.3 6 12 6q-.8 0-1.462.362-.663.363-1.063.988-.175.275-.075.6.1.325.45.45.2.1.475.012.275-.087.45-.337.225-.3.537-.463.313-.162.688-.162.6 0 .975.325t.375.825q0 .425-.187.737-.188.313-.663.713-.425.35-.675.638-.25.287-.375.562-.075.175-.112.375-.038.2-.063.525-.025.3.188.525.212.225.537.225Zm0 8.725q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075Z"/>
    </Icon>
  );
});

IconMaterialNotListedLocationFilled.displayName = 'AmauiIconMaterialNotListedLocationFilled';

export default IconMaterialNotListedLocationFilled;
