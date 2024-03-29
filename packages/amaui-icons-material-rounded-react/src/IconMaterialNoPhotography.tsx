import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoPhotography = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotography'

      short_name='NoPhotography'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 19.125-2-2V7H9.875L7.5 4.625l.9-.975q.275-.3.662-.475Q9.45 3 9.875 3h4.25q.425 0 .813.175.387.175.662.475L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7ZM16.475 13.6 11.4 8.525q1.05-.125 2.05.212 1 .338 1.725 1.063.725.725 1.075 1.737.35 1.013.225 2.063Zm-5.375.3Zm3.35-2.325ZM5.025 5l2 2H4v12h12.175l-2.025-2.025q-.475.275-1.025.4-.55.125-1.125.125-1.875 0-3.188-1.312Q7.5 14.875 7.5 13q0-.575.125-1.125t.4-1.025L1.375 4.2q-.3-.3-.3-.713 0-.412.3-.712t.712-.3q.413 0 .713.3l18.4 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3L18.175 21H4q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5Z"/>
    </Icon>
  );
});

IconMaterialNoPhotography.displayName = 'AmauiIconMaterialNoPhotography';

export default IconMaterialNoPhotography;
