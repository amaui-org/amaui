import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrescriptionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrescriptionsW100Filled'

      short_name='Prescriptions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.975 21.85 1.625-1.625-3.675-3.675-1.625 1.625q-.775.775-.762 1.837.012 1.063.762 1.838.775.75 1.837.763 1.063.012 1.838-.763Zm2.1-2.1 1.625-1.625q.775-.775.775-1.837 0-1.063-.775-1.838-.75-.75-1.837-.75-1.088 0-1.838.75L16.4 16.075ZM7.65 8.65h8.7v-.7h-8.7ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm-1.45 15.2H5.8q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.85q-.275-.725.15-1.363.425-.637 1.2-.637.8 0 1.225.637.425.638.125 1.363h4.85q.625 0 1.063.437.437.438.437 1.063v4.9q-.925.025-1.775.337-.85.313-1.575.888v-.275h-8.7v.7h8.225l-3 3H7.65v.7h4.525q-.725.725-1.15 1.662-.425.938-.475 1.988Z"/>
    </Icon>
  );
});

IconMaterialPrescriptionsW100Filled.displayName = 'AmauiIconMaterialPrescriptionsW100Filled';

export default IconMaterialPrescriptionsW100Filled;
