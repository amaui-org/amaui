import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFactCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactCheck'

      short_name='FactCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 9h3q.425 0 .713-.288Q10 8.425 10 8t-.287-.713Q9.425 7 9 7H6q-.425 0-.713.287Q5 7.575 5 8t.287.712Q5.575 9 6 9Zm0 4h3q.425 0 .713-.288Q10 12.425 10 12t-.287-.713Q9.425 11 9 11H6q-.425 0-.713.287Q5 11.575 5 12t.287.712Q5.575 13 6 13Zm0 4h3q.425 0 .713-.288Q10 16.425 10 16t-.287-.713Q9.425 15 9 15H6q-.425 0-.713.287Q5 15.575 5 16t.287.712Q5.575 17 6 17Zm8.55-2.425q.2 0 .375-.063.175-.062.325-.212l3.55-3.55q.325-.325.313-.713-.013-.387-.313-.687-.3-.3-.713-.3-.412 0-.712.3l-2.825 2.825-.725-.725q-.3-.3-.7-.288-.4.013-.7.313-.275.3-.288.7-.012.4.288.7L13.85 14.3q.15.15.325.212.175.063.375.063ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v14q0 .825-.587 1.413Q20.825 21 20 21Zm0-2h16V5H4v14Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialFactCheck.displayName = 'AmauiIconMaterialFactCheck';

export default IconMaterialFactCheck;
