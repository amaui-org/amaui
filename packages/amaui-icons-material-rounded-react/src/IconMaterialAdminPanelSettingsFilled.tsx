import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdminPanelSettingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminPanelSettingsFilled'

      short_name='AdminPanelSettings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 17q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q17.625 14 17 14t-1.062.438q-.438.437-.438 1.062t.438 1.062Q16.375 17 17 17Zm0 3q.775 0 1.425-.363.65-.362 1.05-.962-.55-.325-1.175-.5T17 18q-.675 0-1.3.175t-1.175.5q.4.6 1.05.962Q16.225 20 17 20Zm0 2q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm-5-.075h-.238q-.112 0-.237-.05-3.275-1-5.4-4.05Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125v4.3q-.725-.325-1.462-.5Q17.8 10 17 10q-2.9 0-4.95 2.05Q10 14.1 10 17q0 1.425.5 2.663.5 1.237 1.525 2.262H12Z"/>
    </Icon>
  );
});

IconMaterialAdminPanelSettingsFilled.displayName = 'AmauiIconMaterialAdminPanelSettingsFilled';

export default IconMaterialAdminPanelSettingsFilled;
