import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewInArW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArW100Filled'

      short_name='ViewInAr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 6q-.15 0-.25-.1t-.1-.25V4.5q0-.925.638-1.563Q3.575 2.3 4.5 2.3h1.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H4.5q-.625 0-1.062.425Q3 3.85 3 4.5v1.15q0 .15-.1.25t-.25.1ZM4.5 21.7q-.925 0-1.562-.638Q2.3 20.425 2.3 19.5v-1.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.15q0 .625.438 1.062Q3.875 21 4.5 21h1.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm13.85-.25q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.15q.65 0 1.075-.438.425-.437.425-1.062V18.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.15q0 .925-.638 1.562-.637.638-1.562.638Zm3-15.45q-.15 0-.25-.1t-.1-.25V4.5q0-.65-.425-1.075Q20.15 3 19.5 3h-1.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.15q.925 0 1.562.637.638.638.638 1.563v1.15q0 .15-.1.25t-.25.1ZM12 18.65l.35-.2v-6.2l5.3-3V8.8l-.35-.2-5.3 3.05L6.7 8.6l-.35.2v.45l5.3 3v6.2Zm-.75.375L6.4 16.2q-.35-.2-.55-.55-.2-.35-.2-.75V9.25q0-.4.2-.75t.55-.55l4.85-2.825q.35-.2.75-.2t.75.2L17.6 7.95q.35.2.55.55.2.35.2.75v5.65q0 .4-.2.75t-.55.55l-4.85 2.825q-.35.2-.75.2t-.75-.2Z"/>
    </Icon>
  );
});

IconMaterialViewInArW100Filled.displayName = 'AmauiIconMaterialViewInArW100Filled';

export default IconMaterialViewInArW100Filled;
