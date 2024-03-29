import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileDownloadOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOffFilled'

      short_name='FileDownloadOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.075 21.9 17.15 20H6q-.825 0-1.412-.587Q4 18.825 4 18v-2q0-.425.287-.713Q4.575 15 5 15t.713.287Q6 15.575 6 16v2h9.15l-2.575-2.575q-.15.075-.287.112-.138.038-.288.038-.25 0-.412-.075-.163-.075-.288-.2l-3.6-3.6q-.275-.275-.287-.638-.013-.362.187-.612L2.075 4.925q-.275-.275-.275-.7 0-.425.3-.725.275-.275.7-.275.425 0 .725.275l16.975 17q.275.275.275.7 0 .425-.275.7-.3.3-.725.3t-.7-.3ZM20 17.15l-1.775-1.775q.125-.15.313-.262Q18.725 15 19 15q.425 0 .712.287.288.288.288.713Zm-4.575-4.575L14 11.15l.875-.875q.275-.275.713-.263.437.013.712.288.275.275.275.7 0 .425-.275.7ZM13 10.15l-2-2V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadOffFilled.displayName = 'AmauiIconMaterialFileDownloadOffFilled';

export default IconMaterialFileDownloadOffFilled;
