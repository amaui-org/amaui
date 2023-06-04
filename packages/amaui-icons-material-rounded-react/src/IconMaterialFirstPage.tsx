import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFirstPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPage'

      short_name='FirstPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.3 17.3-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L13.8 12l3.9 3.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM7 18q-.425 0-.713-.288Q6 17.425 6 17V7q0-.425.287-.713Q6.575 6 7 6t.713.287Q8 6.575 8 7v10q0 .425-.287.712Q7.425 18 7 18Z"/>
    </Icon>
  );
});

IconMaterialFirstPage.displayName = 'AmauiIconMaterialFirstPage';

export default IconMaterialFirstPage;
