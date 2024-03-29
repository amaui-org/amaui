import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileDownloadDone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadDone'

      short_name='FileDownloadDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.425 0-.713-.288Q5 19.425 5 19t.287-.712Q5.575 18 6 18h12q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 20 18 20Zm3.55-4.425q-.2 0-.375-.063Q9 15.45 8.85 15.3L4.6 11.05q-.275-.275-.275-.725 0-.45.275-.725.275-.275.7-.275.425 0 .7.275l3.55 3.55L18 4.7q.275-.275.713-.275.437 0 .712.275.275.275.275.712 0 .438-.275.713L10.25 15.3q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadDone.displayName = 'AmauiIconMaterialFileDownloadDone';

export default IconMaterialFileDownloadDone;
