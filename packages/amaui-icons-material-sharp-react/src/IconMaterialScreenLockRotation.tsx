import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenLockRotation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockRotation'

      short_name='ScreenLockRotation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.95 11.65 1.4-1.4 2.45 2.45-7.05 7.05L4.2 9.2l7.05-7.05L13.7 4.6l-1.35 1.45-1.1-1.1L7 9.2l7.75 7.75L19 12.7ZM13 22.95q-2.475 0-4.662-.95-2.188-.95-3.813-2.575Q2.9 17.8 1.95 15.613 1 13.425 1 10.95h2q0 1.8.613 3.425Q4.225 16 5.3 17.3q1.075 1.3 2.55 2.213 1.475.912 3.175 1.262L8.4 18.15l1.4-1.4 5.9 5.9q-.675.15-1.325.225-.65.075-1.375.075ZM15 9V4h1V3q0-.825.587-1.413Q17.175 1 18 1q.825 0 1.413.587Q20 2.175 20 3v1h1v5Zm2-5h2V3q0-.425-.288-.713Q18.425 2 18 2t-.712.287Q17 2.575 17 3Zm-4 6.95Z"/>
    </Icon>
  );
});

IconMaterialScreenLockRotation.displayName = 'AmauiIconMaterialScreenLockRotation';

export default IconMaterialScreenLockRotation;
