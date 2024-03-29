import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipFilled'

      short_name='Sip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q.425 0 .713-.288Q13 14.425 13 14v-4q0-.425-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10v4q0 .425.288.712.287.288.712.288Zm2.75 0q.325 0 .538-.213.212-.212.212-.537V13H18q.425 0 .712-.288Q19 12.425 19 12v-2q0-.425-.288-.713Q18.425 9 18 9h-3q-.425 0-.712.287Q14 9.575 14 10v4.25q0 .325.213.537.212.213.537.213Zm.75-3.5v-1h2v1ZM5.75 15H9q.425 0 .713-.288Q10 14.425 10 14v-1.75q0-.425-.287-.713-.288-.287-.713-.287H6.5v-.75h2.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q9.575 9 9.25 9H6q-.425 0-.713.287Q5 9.575 5 10v1.75q0 .425.287.712.288.288.713.288h2.5v.75H5.75q-.325 0-.537.212Q5 13.925 5 14.25q0 .325.213.537.212.213.537.213ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialSipFilled.displayName = 'AmauiIconMaterialSipFilled';

export default IconMaterialSipFilled;
