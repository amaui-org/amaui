import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPendingActionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingActionsW100'

      short_name='PendingActions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 20.7q-1.525 0-2.612-1.088Q13.8 18.525 13.8 17q0-1.525 1.088-2.613Q15.975 13.3 17.5 13.3q1.525 0 2.613 1.087Q21.2 15.475 21.2 17t-1.087 2.612Q19.025 20.7 17.5 20.7Zm1.65-1.55.5-.5-1.8-1.8v-2.7h-.7v3ZM4.3 19.7V4.3h6.275q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H19.7v7.45q-.2-.075-.35-.138-.15-.062-.35-.112V5h-3.3v2H8.3V5H5v14h7.175q.05.2.125.362.075.163.2.338ZM12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialPendingActionsW100.displayName = 'AmauiIconMaterialPendingActionsW100';

export default IconMaterialPendingActionsW100;
