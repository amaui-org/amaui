import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationFilled'

      short_name='AddLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.425 0 .713-.288Q13 13.425 13 13v-2h2q.425 0 .713-.288Q16 10.425 16 10t-.287-.713Q15.425 9 15 9h-2V7q0-.425-.287-.713Q12.425 6 12 6t-.712.287Q11 6.575 11 7v2H9q-.425 0-.712.287Q8 9.575 8 10t.288.712Q8.575 11 9 11h2v2q0 .425.288.712.287.288.712.288Zm0 7.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075Z"/>
    </Icon>
  );
});

IconMaterialAddLocationFilled.displayName = 'AmauiIconMaterialAddLocationFilled';

export default IconMaterialAddLocationFilled;
