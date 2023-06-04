import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewHeadlineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewHeadlineFilled'

      short_name='ViewHeadline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.975 15q-.425 0-.7-.288Q4 14.425 4 14t.287-.713Q4.575 13 5 13h14.025q.425 0 .7.287.275.288.275.713t-.288.712Q19.425 15 19 15Zm0 4q-.425 0-.7-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h14.025q.425 0 .7.288.275.287.275.712t-.288.712Q19.425 19 19 19Zm0-8q-.425 0-.7-.288Q4 10.425 4 10t.287-.713Q4.575 9 5 9h14.025q.425 0 .7.287Q20 9.575 20 10t-.288.712Q19.425 11 19 11Zm0-4q-.425 0-.7-.287Q4 6.425 4 6t.287-.713Q4.575 5 5 5h14.025q.425 0 .7.287Q20 5.575 20 6t-.288.713Q19.425 7 19 7Z"/>
    </Icon>
  );
});

IconMaterialViewHeadlineFilled.displayName = 'AmauiIconMaterialViewHeadlineFilled';

export default IconMaterialViewHeadlineFilled;
