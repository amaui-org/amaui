import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVaccinesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VaccinesW100Filled'

      short_name='Vaccines'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.35 21.2-.7-.525V16.35h-3v-9.5h-1v-.7h4v-2.8h-1.5v-.7h3.7v.7h-1.5v2.8h4v.7h-1v9.5h-3Zm-3-5.55h5.3V13.1H6.9v-.7h2.75v-2.3H6.9v-.7h2.75V6.85h-5.3Zm9.3 5.7V13.5q0-.725.325-1.188.325-.462.6-.762.25-.275.413-.5.162-.225.162-.55V9.35h-1v-.7h5.7v.7h-1v1.15q0 .325.163.55.162.225.412.5.275.3.6.762.325.463.325 1.188v7.85Zm.7-6.95h5.3v-.9q0-.525-.225-.875t-.55-.7q-.25-.275-.487-.6-.238-.325-.238-.825V9.35h-2.3v1.15q0 .5-.237.825-.238.325-.488.6-.325.35-.55.7-.225.35-.225.875Zm0 6.25h5.3V18.1h-5.3Z"/>
    </Icon>
  );
});

IconMaterialVaccinesW100Filled.displayName = 'AmauiIconMaterialVaccinesW100Filled';

export default IconMaterialVaccinesW100Filled;
