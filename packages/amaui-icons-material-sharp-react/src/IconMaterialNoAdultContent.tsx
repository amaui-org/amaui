import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoAdultContent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoAdultContent'

      short_name='NoAdultContent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q1.4 0 2.637-.438 1.238-.437 2.263-1.237L13.575 15H16.4l1.9 1.9q.8-1.025 1.25-2.263Q20 13.4 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.4 0-2.637.45Q8.125 4.9 7.1 5.7L10.425 9H7.6L5.7 7.1q-.8 1.025-1.25 2.263Q4 10.6 4 12q0 3.325 2.338 5.663Q8.675 20 12 20Zm-7-6 1.5-2L5 10h1.5l.75 1L8 10h1.5L8 12l1.5 2H8l-.75-1-.75 1Zm4.75 0 1.5-2-1.5-2h1.5l.75 1 .75-1h1.5l-1.5 2 1.5 2h-1.5L12 13l-.75 1Zm4.75 0 1.5-2-1.5-2H16l.75 1 .75-1H19l-1.5 2 1.5 2h-1.5l-.75-1-.75 1Z"/>
    </Icon>
  );
});

IconMaterialNoAdultContent.displayName = 'AmauiIconMaterialNoAdultContent';

export default IconMaterialNoAdultContent;
