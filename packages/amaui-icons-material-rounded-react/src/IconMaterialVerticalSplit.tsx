import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalSplit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplit'

      short_name='VerticalSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15q-.425 0-.712-.288Q3 14.425 3 14t.275-.713q.275-.287.7-.287H10q.425 0 .713.287.287.288.287.713t-.275.712q-.275.288-.7.288Zm0 4q-.425 0-.712-.288Q3 18.425 3 18t.275-.712q.275-.288.7-.288H10q.425 0 .713.288.287.287.287.712t-.275.712q-.275.288-.7.288Zm0-8q-.425 0-.712-.288Q3 10.425 3 10t.275-.713Q3.55 9 3.975 9H10q.425 0 .713.287Q11 9.575 11 10t-.275.712q-.275.288-.7.288Zm0-4q-.425 0-.712-.287Q3 6.425 3 6t.275-.713Q3.55 5 3.975 5H10q.425 0 .713.287Q11 5.575 11 6t-.275.713q-.275.287-.7.287Zm11 0v10Zm-1 12q-.425 0-.712-.288Q13 18.425 13 18V6q0-.425.288-.713Q13.575 5 14 5h6q.425 0 .712.287Q21 5.575 21 6v12q0 .425-.288.712Q20.425 19 20 19Zm1-12v10h4V7Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplit.displayName = 'AmauiIconMaterialVerticalSplit';

export default IconMaterialVerticalSplit;
