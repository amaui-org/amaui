import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelPresentationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationW100Filled'

      short_name='CancelPresentation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 14.85q.125.125.25.125t.25-.125L12 12.5l2.375 2.375q.1.1.225.1t.25-.125q.125-.125.125-.25t-.125-.25L12.5 12l2.375-2.375q.1-.1.1-.225t-.125-.25q-.125-.125-.25-.125t-.25.125L12 11.5 9.625 9.125q-.1-.1-.225-.1t-.25.125q-.125.125-.125.25t.125.25L11.5 12l-2.375 2.375q-.1.1-.1.225t.125.25ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationW100Filled.displayName = 'AmauiIconMaterialCancelPresentationW100Filled';

export default IconMaterialCancelPresentationW100Filled;
