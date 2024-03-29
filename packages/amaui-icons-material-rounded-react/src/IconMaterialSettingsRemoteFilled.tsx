import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsRemoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsRemoteFilled'

      short_name='SettingsRemote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 23H9q-.425 0-.712-.288Q8 22.425 8 22V10q0-.425.288-.713Q8.575 9 9 9h6q.425 0 .713.287Q16 9.575 16 10v12q0 .425-.287.712Q15.425 23 15 23Zm-3-8.75q.525 0 .887-.363.363-.362.363-.887t-.363-.887q-.362-.363-.887-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363ZM12 6q-.8 0-1.5.225t-1.3.625q-.35.225-.762.2-.413-.025-.688-.3-.3-.3-.275-.7.025-.4.35-.65.875-.65 1.925-1.025Q10.8 4 12 4t2.25.375q1.05.375 1.925 1.025.325.25.35.65.025.4-.275.7-.275.275-.675.3-.4.025-.75-.2-.6-.4-1.312-.625Q12.8 6 12 6Zm0-4q-1.6 0-3.012.512-1.413.513-2.563 1.438-.35.275-.775.275-.425 0-.725-.3t-.275-.737q.025-.438.375-.713 1.425-1.15 3.2-1.813Q10 0 12 0q2.025 0 3.812.688 1.788.687 3.213 1.887.325.275.325.675t-.3.7q-.3.3-.713.287-.412-.012-.762-.287-1.15-.925-2.562-1.438Q13.6 2 12 2Z"/>
    </Icon>
  );
});

IconMaterialSettingsRemoteFilled.displayName = 'AmauiIconMaterialSettingsRemoteFilled';

export default IconMaterialSettingsRemoteFilled;
