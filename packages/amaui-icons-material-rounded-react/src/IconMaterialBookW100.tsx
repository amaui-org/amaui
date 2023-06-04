import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookW100'

      short_name='Book'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.4q.3 0 .55-.25.25-.25.25-.55V4.8q0-.3-.25-.55Q17.5 4 17.2 4H16v5.15q0 .225-.2.35-.2.125-.4 0l-1.25-.75-1.25.75q-.2.125-.4 0t-.2-.35V4H6.8q-.3 0-.55.25Q6 4.5 6 4.8v14.4q0 .3.25.55.25.25.55.25Zm5.5-16H16ZM6.8 4H6h12-.8Z"/>
    </Icon>
  );
});

IconMaterialBookW100.displayName = 'AmauiIconMaterialBookW100';

export default IconMaterialBookW100;
