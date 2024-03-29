import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVignette = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vignette'

      short_name='Vignette'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q2.45 0 4.225-1.188Q18 13.625 18 12q0-1.625-1.775-2.812Q14.45 8 12 8 9.55 8 7.775 9.188 6 10.375 6 12q0 1.625 1.775 2.812Q9.55 16 12 16Zm0-2q-1.65 0-2.825-.6Q8 12.8 8 12q0-.8 1.175-1.4Q10.35 10 12 10q1.65 0 2.825.6Q16 11.2 16 12q0 .8-1.175 1.4Q13.65 14 12 14Zm-8 6q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v12Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialVignette.displayName = 'AmauiIconMaterialVignette';

export default IconMaterialVignette;
