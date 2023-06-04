import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalServicesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesW100'

      short_name='MedicalServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 14.35V17q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-2.65H15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.65V11q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.65H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM4.8 20.7q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h4.5V6.1q0-.65.425-1.075Q10.15 4.6 10.8 4.6h2.4q.65 0 1.075.425.425.425.425 1.075v1.2h4.5q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425ZM10 7.3h4V6.1q0-.35-.225-.575Q13.55 5.3 13.2 5.3h-2.4q-.35 0-.575.225Q10 5.75 10 6.1ZM4.8 20h14.4q.35 0 .575-.225Q20 19.55 20 19.2V8.8q0-.35-.225-.575Q19.55 8 19.2 8H4.8q-.35 0-.575.225Q4 8.45 4 8.8v10.4q0 .35.225.575Q4.45 20 4.8 20ZM4 20V8v12Z"/>
    </Icon>
  );
});

IconMaterialMedicalServicesW100.displayName = 'AmauiIconMaterialMedicalServicesW100';

export default IconMaterialMedicalServicesW100;
