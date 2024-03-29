import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsSoccer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsSoccer'

      short_name='SportsSoccer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm5-12.5 1.35-.45.4-1.35q-.8-1.2-1.925-2.063Q15.7 4.775 14.35 4.35L13 5.3v1.4Zm-10 0 4-2.8V5.3l-1.35-.95q-1.35.425-2.475 1.287Q6.05 6.5 5.25 7.7l.4 1.35Zm-1.05 7.7 1.15-.1.75-1.35L6.4 11.4 5 10.9l-1 .75q0 1.625.45 2.962.45 1.338 1.5 2.588ZM12 20q.65 0 1.275-.1.625-.1 1.225-.3l.7-1.5-.65-1.1h-5.1l-.65 1.1.7 1.5q.6.2 1.225.3.625.1 1.275.1Zm-2.25-5h4.5l1.4-4L12 8.45 8.4 11Zm8.3 2.2q1.05-1.25 1.5-2.588.45-1.337.45-2.962l-1-.7-1.4.45-1.45 4.35.75 1.35Z"/>
    </Icon>
  );
});

IconMaterialSportsSoccer.displayName = 'AmauiIconMaterialSportsSoccer';

export default IconMaterialSportsSoccer;
