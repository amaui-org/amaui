import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBiotechFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechFilled'

      short_name='Biotech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 9.8q-.75 0-1.275-.525Q8.7 8.75 8.7 8q0-.75.525-1.275Q9.75 6.2 10.5 6.2q.75 0 1.275.525Q12.3 7.25 12.3 8q0 .75-.525 1.275-.525.525-1.275.525ZM6 21q-.425 0-.713-.288Q5 20.425 5 20t.287-.712Q5.575 19 6 19h4v-2q-2.075 0-3.537-1.463Q5 14.075 5 12q0-1.525.787-2.7.788-1.175 1.938-1.725-.125.6.05 1.137.175.538.45.888-.6.425-.913 1.075Q7 11.325 7 12q0 1.25.875 2.125T10 15h7q.425 0 .712.287.288.288.288.713t-.288.712Q17.425 17 17 17h-4v2h5q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 21 18 21Zm8.95-9.25q-.35.125-.725 0t-.5-.525l-.025-.075q-.4.125-.787-.038-.388-.162-.513-.562l-.125-.375q.35-.275.688-.838Q13.3 8.775 13.3 8q0-1.2-.837-2-.838-.8-2.013-.8l-.125-.325q-.175-.45 0-.788.175-.337.55-.462l.075-.025v-.025q-.2-.45-.012-.763.187-.312.562-.437.375-.125.725-.013.35.113.55.538l.025.05q.4-.125.788.037.387.163.512.563l2.05 5.625q.175.45-.013.8-.187.35-.562.475h-.025l.025.075q.125.35-.037.713-.163.362-.588.512Z"/>
    </Icon>
  );
});

IconMaterialBiotechFilled.displayName = 'AmauiIconMaterialBiotechFilled';

export default IconMaterialBiotechFilled;
