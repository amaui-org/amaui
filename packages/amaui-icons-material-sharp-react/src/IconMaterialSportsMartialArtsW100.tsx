import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsMartialArtsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsMartialArtsW100'

      short_name='SportsMartialArts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.625 22.35-.275-9.55-4.425-2.6-.65 2.375 1.6 2.75-.625.35L4.5 12.65l1.05-3.775 5.875-3.35-2.45-2.65.475-.475 3.1 3.25L8.8 7.875l2.95 1.975 7.975-6.95.4.475-8.25 8.35-.5 10.625ZM5 6.6q-.65 0-1.125-.475T3.4 5q0-.65.475-1.125T5 3.4q.65 0 1.125.475T6.6 5q0 .65-.475 1.125T5 6.6Z"/>
    </Icon>
  );
});

IconMaterialSportsMartialArtsW100.displayName = 'AmauiIconMaterialSportsMartialArtsW100';

export default IconMaterialSportsMartialArtsW100;
