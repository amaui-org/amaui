import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalHospitalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospitalW100'

      short_name='LocalHospital'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.35q.225 0 .375-.15t.15-.375v-3.3h3.3q.225 0 .375-.15t.15-.375q0-.225-.15-.375t-.375-.15h-3.3v-3.3q0-.225-.15-.375T12 7.65q-.225 0-.375.15t-.15.375v3.3h-3.3q-.225 0-.375.15T7.65 12q0 .225.15.375t.375.15h3.3v3.3q0 .225.15.375t.375.15ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 18.55 19 18.2V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialLocalHospitalW100.displayName = 'AmauiIconMaterialLocalHospitalW100';

export default IconMaterialLocalHospitalW100;
